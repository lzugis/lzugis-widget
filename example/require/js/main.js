require.config({
    baseUrl : "/example/require/js",
    map: {
        "*": {
            "css": "js/css"
        }
    },
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery","jquery"],
        "test":"test"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "jquery.plugin": {
            deps: ["jquery","css!css/main"]
        },
        "plugin": {
            deps: ""
        }
    }
});