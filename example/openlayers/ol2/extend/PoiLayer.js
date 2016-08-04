OpenLayers.Layer.PoiLayer = OpenLayers.Class(OpenLayers.Layer.Grid, {
    DEFAULT_PARAMS: { service: "WMS",
        version: "1.1.1",
        request: "GetMap",
        styles: "",
        format: "image/jpeg"
    },
    isBaseLayer: true,
    encodeBBOX: false,
    noMagic: false,
    yx: {},
    layer:"",
    initialize: function(name, url, params, options) {
        var newArguments = [];
        //uppercase params
        params = OpenLayers.Util.upperCaseObject(params);
        if (parseFloat(params.VERSION) >= 1.3 && !params.EXCEPTIONS) {
            params.EXCEPTIONS = "INIMAGE";
        }
        newArguments.push(name, url, params, options);
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
        OpenLayers.Util.applyDefaults(
            this.params,
            OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS)
        );


        //layer is transparent        
        if (!this.noMagic && this.params.TRANSPARENT &&
            this.params.TRANSPARENT.toString().toLowerCase() == "true") {

            // unless explicitly set in options, make layer an overlay
            if ( (options == null) || (!options.isBaseLayer) ) {
                this.isBaseLayer = false;
            }

            // jpegs can never be transparent, so intelligently switch the 
            //  format, depending on the browser's capabilities
            if (this.params.FORMAT == "image/jpeg") {
                this.params.FORMAT = OpenLayers.Util.alphaHack() ? "image/gif"
                    : "image/png";
            }
        }

    },
    clone: function (obj) {

        if (obj == null) {
            obj = new OpenLayers.Layer.WMS(this.name,
                this.url,
                this.params,
                this.getOptions());
        }

        //get all additions from superclasses
        obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);

        // copy/set any non-init, non-simple values here

        return obj;
    },
    reverseAxisOrder: function() {
        var projCode = this.projection.getCode();
        return parseFloat(this.params.VERSION) >= 1.3 &&
            !!(this.yx[projCode] || OpenLayers.Projection.defaults[projCode].yx);
    },
    getURL: function (bounds) {
        bounds = this.adjustBounds(bounds);
        var imageSize = this.getImageSize();
        var newParams = {};
        // WMS 1.3 introduced axis order
        var reverseAxisOrder = this.reverseAxisOrder();
        newParams.BBOX = this.encodeBBOX ?
            bounds.toBBOX(null, reverseAxisOrder) :
            bounds.toArray(reverseAxisOrder);
        newParams.WIDTH = imageSize.w;
        newParams.HEIGHT = imageSize.h;
        var requestString = this.getFullRequestString(newParams);
        var zoom = this.map.getZoom();
        var layer = this.name;
        return requestString+"&z="+zoom+"&layer="+layer;
    },

    mergeNewParams:function(newParams) {
        var upperParams = OpenLayers.Util.upperCaseObject(newParams);
        var newArguments = [upperParams];
        return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,
            newArguments);
    },
    getFullRequestString:function(newParams, altUrl) {
        var mapProjection = this.map.getProjectionObject();
        var projectionCode = this.projection && this.projection.equals(mapProjection) ?
            this.projection.getCode() :
            mapProjection.getCode();
        var value = (projectionCode == "none") ? null : projectionCode;
        if (parseFloat(this.params.VERSION) >= 1.3) {
            this.params.CRS = value;
        } else {
            this.params.SRS = value;
        }

        if (typeof this.params.TRANSPARENT == "boolean") {
            newParams.TRANSPARENT = this.params.TRANSPARENT ? "TRUE" : "FALSE";
        }

        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(
            this, arguments);
    },

    CLASS_NAME: "OpenLayers.Layer.PoiLayer"
});