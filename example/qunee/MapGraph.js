function createEventFunction(scope, fun){
    return function(evt){
        return fun.call(scope, evt);
    }
}

var MapGraph = function(map) {
	var canvas = document.createElement('div');
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.style.position = 'absolute';
    canvas.style.top = '0px';
	canvas.style.left = '0px';
    canvas.style.zIndex = 999;
    map.viewPortDiv.insertBefore(canvas, map.viewPortDiv.firstChild);

    Q.doSuperConstructor(this, MapGraph, [canvas]);
    this.enableWheelZoom = false;
    this.enableDoubleClickToOverview = false;
    this.originAtCenter = false;
    this.setMap(map);
}

MapGraph.prototype = {
    map : null,
    mapShowing : true,
    createNodeByLonLat: function(name, lon, lat){
        var l = this.toLonLat(lon, lat);
        var p = this.getPixelFromLonLat(l);
        var node = graph.createNode(name, p.x, p.y);
        node.lonLat = l;
        return node;
    },
    toLonLat: function(lon, lat){
        return new OpenLayers.LonLat(lon, lat);
    },
    getPixelFromLonLat: function(lonLat){
        return this.map.getPixelFromLonLat(lonLat);
    },
    setMap : function(map) {
        this.map = map;
        this.map.events.register('move', this, this.updateNodes);
        this.map.events.register('moveend', this, this.updateNodes);
        this.map.events.register('zoomend', this, function(){this.updateNodes(true)});

        this.html.ondblclick = createEventFunction(this, function(evt){
            if(this.getElementByMouseEvent(evt)){
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
            this.map.zoomTo(this.map.zoom + (evt.delta > 0 ? 1 : -1), this.globalToLocal(evt));
        }
        this.interactionDispatcher.addListener(function(evt){
            if(evt.kind == Q.InteractionEvent.ELEMENT_MOVE_END){
                var datas = evt.datas;
                Q.forEach(datas, function(data){
                    var pixel = this.toCanvas(data.location.x, data.location.y);
                    data.lonLat = this.map.getLonLatFromPixel(new OpenLayers.Pixel(pixel.x, pixel.y));
                }, this);
            }
        }, this)
    },
    zoomIn: function(){

    },
    zoomOut: function(){

    },
    zoomAt: function(){

    },
    translate: function (tx, ty) {
        Q.doSuper(this, MapGraph, "translate", arguments);
        this.map.moveByPx(-tx, -ty);
    },
    updateNodes: function(updateLocation){
        if(updateLocation === true){
            this.forEach(function(d){
                if(d instanceof Q.Node){
                    var l = d.lonLat;
                    var p = this.getPixelFromLonLat(l);
                    d.location = p;
                }
            }, this);
            this.translateTo(0, 0);
            return;
        }
        this.translateTo(this.map.layerContainerOriginPx.x, this.map.layerContainerOriginPx.y);
    }
}

Q.extend(MapGraph, Q.Graph);