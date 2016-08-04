define([
        "dojo/Evented",
        "dojo/parser",
        "dojo/on",
        "dojo/_base/declare",
        "dojo/dom-construct",
        "dojo/_base/array",
        "dojo/dom-style",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/fx/Toggler",
        "dojo/fx",
        "dojo/Deferred",
        "esri/domUtils",
        "esri/InfoWindowBase",
        "esri/PopupBase",
        "esri/dijit/Popup"
    ],
    function(
        Evented,
        parser,
        on,
        declare,
        domConstruct,
        array,
        domStyle,
        lang,
        domClass,
        Toggler,
        coreFx,
        Deferred,
        domUtils,
        InfoWindowBase,
        PopupBase,
        Popup
    ) {
        return declare([Popup, Evented], {

            isContentShowing :false,
            width :270,
            height :100,

            constructor: function(parameters) {

                lang.mixin(this, parameters);

                this.anchor = "top-right";

                //hide initial display
                domUtils.hide(this.domNode);
                this.isShowing = false;

            },

            onShow: function(){
                this.domNode.style.display="block";
            },
            show:function(location ,c){
                    if(this.popupWindow)
                    if(location){
                        var map=this.map,d;
                        location.spatialReference?(this._location=location,d=map.toScreen(location)):(this._location=map.toMap(location),d=location);
                        var frameWidth = map._getFrameWidth();
                        if(-1!==frameWidth&&(d.x%=frameWidth,0>d.x&&(d.x+=frameWidth),map.width>frameWidth))
                            for(b=(map.width-frameWidth)/2;d.x<b;)
                                d.x+=frameWidth;
                        if(this._maximized){
                            this.restore();
                        }else{
                            this._setPosition(d);
                        }
                        c&&c.closestFirst&&this.showClosestFirst(this._location);
                        this.isShowing||(this._toggleVisibility(!0),this._followMap(),this.startupDijits(this._title),this.startupDijits(this._contentPane),this.reposition(),this.showHighlight(),this.onShow());
                        this._adjustPosition(this.map.toScreen(location));
                    }
                    else
                        this._toggleVisibility(!0);
            },
            _adjustPosition:function (location){
                if(this.popupWindow&&this.map){
                    if(this._location&&!this._maximized&&this.isShowing){
                        var scPt = location,mapPt;
                        scPt.y = location.y - this.height/15;
                        mapPt = this.map.toMap(scPt);
                        location.x = location.x - this.width*0.425;
                        this._setPosition(location);
                        mapPt.y=mapPt.y+this.map.extent.getHeight()/5;
                        this.map.centerAt(mapPt);
                    }
                }
            }
        });
        return myPopup;
    });