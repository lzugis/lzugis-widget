OpenLayers.Strategy.Grid = OpenLayers.Class(OpenLayers.Strategy, {
    grid: null,
    buffer: 1,
    loadedBounds: null,
    zoom: null,
    geometryFeatureMap: {},
    tiles: {},
    initialize: function(options) {
        OpenLayers.Strategy.prototype.initialize.apply(this, [options]);
    },

    destroy: function() {
        this.clearGrid();
        this.grid = null;
        this.tileSize = null;
        OpenLayers.Strategy.prototype.destroy.apply(this, arguments);
    },

    activate: function() {
        var activated = OpenLayers.Strategy.prototype.activate.call(this);
        if(activated) {
            this.layer.events.on({
                "moveend": this.update,
                "refresh": this.update,
                scope: this
            });
            if(this.layer.visibility == true || this.preload) {
                this.update();
            }
            else {
                this.layer.events.on({
                    "visibilitychanged": this.load,
                    scope: this
                });
            }
        }
        
        return activated;
    },

    deactivate: function() {
        var deactivated = OpenLayers.Strategy.prototype.deactivate.call(this);
        if(deactivated) {
            this.layer.events.un({
                "moveend": this.update,
                "refresh": this.update,
                "visibilitychanged": this.load,
                scope: this
            });
        }
        return deactivated;
    },

    loadData: function(bbox,zoom) {
        var scope = this;
        var url = scope.layer.protocol.url+"?bbox="+bbox+"&z="+zoom;
        $.ajax({
            type : "POST",
            cache: false,
            url : url,
            async : false,
            success : function(data) {
                scope.readDone(data);
            }
        });
    },

    update: function() {
        var bounds = this.layer.map.getExtent();
        if (bounds == null) return;
        var map = this.layer.map
        var curZoom = map.zoom;
        if (curZoom != this.zoom) {
            this.layer.destroyFeatures();
            this.geometryFeatureMap = {};
            this.tiles = {};
            this.zoom = curZoom
        }
        this.loadData(bounds.toBBOX(),curZoom);
    },

    readDone: function(data) {
        this.merge(data, this.options);
    },

    merge: function(data, options) { 
        var data = eval("("+data+")");
        console.log("供查询到"+data.length+"条数据");
        if(data.length > 0) {  
            var features = [];          
            for(var i=0, len=data.length; i<len; ++i) {
                var d = data[i];
                var feature = new OpenLayers.Feature.Vector(
                        new OpenLayers.Geometry.Point(d.x, d.y),
                        d
                );
                features.push(feature);
            }
            this.layer.addFeatures(features);
        }
    },
    CLASS_NAME: "OpenLayers.Strategy.Grid"
});
