window.addEventListener("load", init, false);

var graph;
function createEdge(name, a, b){
    var edge = graph.createEdge(name, a, b);
    edge.setStyle(Q.Styles.ARROW_TO, false);
    return edge;
}
function createNode(name, lon, lat){
    var node = graph.createNodeByLonLat(name, lon, lat);
    node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 40, 40);
    node.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#58F");
    node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, [Q.toColor(0x44EEEEEE), Q.toColor(0x44000000)], null, Math.PI/2));
    node.setStyle(Q.Styles.LABEL_OFFSET_Y, 10);
    node.setStyle(Q.Styles.LABEL_PADDING, 3);
    node.setStyle(Q.Styles.LABEL_BORDER, 0.5);
    node.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, Q.toColor(0xCCEEEEEE));
    return node;
}
function init() {
    var format = 'image/png';
    var bounds = new OpenLayers.Bounds(
        73.45100463562233, 18.16324718764174,
        134.97679764650596, 53.531943152223576
    );
    var map = initMap("map",bounds);
    var tiled = new OpenLayers.Layer.WMS(
        "Geoserver layers - Tiled",
        "http://localhost:8088/geoserver/lzugis/wms",
        {
            "LAYERS": 'province',
            "STYLES": '',
            format: format
        },
        {
            buffer: 0,
            displayOutsideMaxExtent: true,
            isBaseLayer: true,
            yx : {'EPSG:4326' : true}
        }
    );
    map.addLayer(tiled);
    map.zoomToExtent(bounds);
    $("#addchart").on("click",function(){
        graph = new MapGraph(map);
        map.events.register('zoomend', this, function(){
            graph.forEach(function(e){
                if(e.invalidateVisibility){
                    e.invalidateVisibility();
                }
            });
        });

        graph.visibleFilter = function(d){
            if(d instanceof Q.Node && d.zoom && map.zoom < d.zoom){
                return false;
            }
            return true;
        }

        graph.callLater(function(){
            Q.loadJSON("data/china_city.json", function(json){
                var nodes = [];
                for(var name in json){
                    var v = json[name];
                    var first = null;
                    for(var n in v){
                        var info = v[n];
                        var node = createNode(n, info.x, info.y);
                        node.size = {width: 20};
                        node.tooltip = n + "\n" + info.x + ", " + info.y;
                        if(!first){
                            first = node;
                            nodes.push(node);
                        }else{
                            node.zoom = 8;
                            node.size = {width: 10};
                            node.name = null;
                            if(Q.randomBool()){
                                createEdge(node, first).setStyle(Q.Styles.EDGE_COLOR, "#888");
                            }
                        }
                    }
                }

                var i=0;
                while(i++ < nodes.length){
                    var a = nodes[Q.randomInt(nodes.length)];
                    var b = nodes[Q.randomInt(nodes.length)];
                    if(b != a){
                        createEdge(a, b);
                    }
                }
            });
        })
    });
}
function initMap(canvas,bounds){
    var options = {
        controls: [],
        maxExtent: bounds,
        maxResolution: 0.2403351289487642,
        projection: "EPSG:4326",
        units: 'degrees'
    };
    var map = new OpenLayers.Map(canvas, options);
    return map;
}