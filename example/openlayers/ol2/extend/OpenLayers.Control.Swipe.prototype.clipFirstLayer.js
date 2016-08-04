OpenLayers.Control.Swipe.prototype.clipFirstLayer = function()
{
    var newFirstLayer = this.getFirstLayerInLayerSwitcher();
    if (this.swipeLayer) {
        if (newFirstLayer.id !== this.swipeLayer.id) {
            if (this.swipeLayer.layers) {
                for (var i = this.swipeLayer.layers.length - 1; i >= 0; i--) {
                    var layer = this.swipeLayer.layers[i];
                    if (layer.div) {
                        layer.div.style.clip = 'auto';
                    }
                }
            } else {
                this.swipeLayer.div.style.clip = 'auto';
            }
        }
    }

    if (newFirstLayer) {
        var width = this.map.getCurrentSize().w;
        var height = this.map.getCurrentSize().h;
        // slider position in pixels
        var s = parseInt(width * this.getSwipeRatio() * ((this.map.getCurrentSize().w - this.width) / this.map.getCurrentSize().w), 10);
        // cliping rectangle
        var top = -parseInt(this.map.layerContainerDiv.style.top);
        var bottom = top + height;
        var left = -parseInt(this.map.layerContainerDiv.style.left);
        var right = left + s + Math.ceil((this.width - 1) / 2);
        //Syntax for clip "rect(top,right,bottom,left)"
        var clip = "rect(" + top + "px " + right + "px " + bottom + "px " + left + "px)";
        this.swipeLayer = newFirstLayer;
        if (this.swipeLayer.layers) {
            for (var i = this.swipeLayer.layers.length - 1; i >= 0; i--) {
                var layer = this.swipeLayer.layers[i];
                if (layer.div) {
                    layer.div.style.clip = clip;
                }
            }
        } else {
            this.swipeLayer.div.style.clip = clip;
        }
    }

}
