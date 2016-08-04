var map, graph;
$(function () {
    map = L.map('map').setView([35.851354460363,104.21390114103], 4);
    var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    map.addLayer(osm);

    graph = new MapGraph(map);

    function createEdge(name, a, b) {
        var edge = graph.createEdge(name, a, b);
        edge.setStyle(Q.Styles.ARROW_TO, false);
        return edge;
    }

    function createNode(name, lon, lat) {
        var node = graph.createNodeByLonLat(name, lon, lat);
        node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 40, 40);
        node.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#58F");
        node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, [Q.toColor(0x44EEEEEE), Q.toColor(0x44000000)], null, Math.PI / 2));
        node.setStyle(Q.Styles.LABEL_OFFSET_Y, 10);
        node.setStyle(Q.Styles.LABEL_PADDING, 3);
        node.setStyle(Q.Styles.LABEL_BORDER, 0.5);
        node.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, Q.toColor(0xCCEEEEEE));
        return node;
    }

    graph.callLater(function () {
        Q.loadJSON("data/china_city.json", function (json) {
            var nodes = [];
            for (var name in json) {
                var v = json[name];
                var first = null;
                for (var n in v) {
                    var info = v[n];
                    var node = createNode(n, info.x, info.y);
                    node.size = {width: 20};
                    node.tooltip = n + "\n" + info.x + ", " + info.y;
                    if (!first) {
                        first = node;
                        nodes.push(node);
                    } else {
                        node.zoom = 8;
                        node.size = {width: 10};
                        node.name = null;
                        if (Q.randomBool()) {
                            createEdge(node, first).setStyle(Q.Styles.EDGE_COLOR, "#888");
                        }
                    }
                }
            }

            var i = 0;
            while (i++ < nodes.length) {
                var a = nodes[Q.randomInt(nodes.length)];
                var b = nodes[Q.randomInt(nodes.length)];
                if (b != a) {
                    createEdge(a, b);
                }
            }
        });
    })

})

function createEventFunction(scope, fun) {
    return function (evt) {
        return fun.call(scope, evt);
    }
}

var MapGraph = function (map) {
    var container = map._container;
    var canvas = document.createElement("div");
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    container.appendChild(canvas);

    Q.doSuperConstructor(this, MapGraph, [canvas]);
    this.enableWheelZoom = false;
    this.enableDoubleClickToOverview = false;
    this.originAtCenter = false;
    this.setMap(map);
    this.visibleFilter = function(d){
        if (d instanceof Q.Node && d.zoom && map._zoom < d.zoom) {
            return false;
        }
        return true;
    }
}

MapGraph.prototype = {
    map: null,
    mapShowing: true,
    enableInertia: false,
    createNodeByLonLat: function (name, lon, lat) {
        var l = this.toLonLat(lon, lat);
        var p = this.getPixelFromLonLat(l);
        var node = graph.createNode(name, p.x, p.y);
        node.lonLat = l;
        return node;
    },
    toLonLat: function (lon, lat) {
        return new L.latLng(lat, lon);
    },
    getPixelFromLonLat: function (lonLat) {
        return this.map.latLngToContainerPoint(lonLat, this.map._zoom);
    },
    getLonLatFromPixel: function (x, y) {
        return this.map.containerPointToLatLng([x, y]);
    },
    setMap: function (map) {
        this.map = map;
        map._zoomAnimated = false;

        this.map.on("zoomstart", this.hideGraph, this);
        this.map.on("zoomend", this.updateNodes, this);

        this.html.ondblclick = createEventFunction(this, function (evt) {
            if (this.getElementByMouseEvent(evt)) {
                Q.stopEvent(evt);
            }
        });
        this.onmousewheel = function(evt){
            if (this._scaling) {
                return;
            }
            this._scaling = true;
            Q.callLater(function() {
                delete this._scaling;
            }, this, 200);
            this.map.setZoomAround(this.globalToLocal(evt), this.map._zoom + (evt.delta > 0 ? 1 : -1));
        };
        this.interactionDispatcher.addListener(function (evt) {
            if (evt.kind == Q.InteractionEvent.ELEMENT_MOVE_END) {
                var datas = evt.datas;
                Q.forEach(datas, function (data) {
                    var pixel = this.toCanvas(data.location.x, data.location.y);
                    data.lonLat = this.getLonLatFromPixel(pixel.x, pixel.y);
                }, this);
            };
        }, this)
    },
    hideGraph: function(){
        this.html.style.visibility = "hidden";
    },
    showGraph: function(){
        this.html.style.visibility = "";
    },
    translate: function (tx, ty) {
        Q.doSuper(this, MapGraph, "translate", arguments);
        this.map.panBy([-tx, -ty], {animate: false});
    },
    resetVisibility: function () {
        this.forEach(function (e) {
            if (e.invalidateVisibility) {
                e.invalidateVisibility(true);
            }
        });
    },
    updateNodes: function () {
        this.translateTo(0, 0, 1, true);
        this.resetVisibility();
        this.forEach(function (d) {
            if (d instanceof Q.Node) {
                var l = d.lonLat;
                var p = this.getPixelFromLonLat(l);
                d.location = p;
            }
        }, this);
        this.showGraph();
    }
};
Q.extend(MapGraph, Q.Graph);