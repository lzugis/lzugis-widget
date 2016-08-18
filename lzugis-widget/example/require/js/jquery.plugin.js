(function($){//创建一个闭包
    $.fn.JPlugin = function(options) {
        var defaults = { };
        var options = $.extend(defaults, options);
        var _thisdom = $(this).empty();
        this.addMessage = function(msg){
            _thisdom.append($("<span />").addClass("h1").html(msg));
        };
        return this;
    };
})(jQuery);//闭包结束