$(document).ready(function(){
    $('body').layout({
        scrollToBookmarkOnLoad:        false,
        padding:                       0,
        north: {
            size:                      40,
            spacing_open:              0,
            closable:                  false,
            resizable:                 false
        },
        west: {
            size:                      280,
            spacing_closed:            6,
            closable:                  false,
            resizable:                 false
        },
        south: {
            size:                      25,
            spacing_open:              0,
            closable:                  false,
            padding:                   0,
            resizable:                 false
        },
        center__childOptions:{
            south: {
                size:                   "50%",
                closable:               true,
                resizable:              true
            },
            onresize:function(e){
                var h = $("#effectDiv").height();
                $("#effect").css("height",(h-25)+"px");
            }
        }
    });
    var setting = {
        callback: {
            onClick: function(event, treeId, treeNode, clickFlag){
                if(treeNode.src){
                    var src = treeNode.src;
                    $("#ifmeffect").attr("src",src);
                    loadCode(src);
                    $("#effecthref").empty().html("页面地址："+src);
                }
            }
        }
    };
    $.fn.zTree.init($("#ztree"), setting, treeData);
    var src = "../lzugis/example/ztree/standardData.html";
    var boxHeight = $("#codeDiv").height();
    $("#prettyprint").css("height",(boxHeight-60)+"px");
    $("#effect").css("top","10px").css("height",(boxHeight-60)+"px");
});

function loadCode(href){
    href +="?="+new Date().getTime();
    $.get(href,function(html){
        html = html.replace(/</g,"&lt;");
        html = html.replace(/>/g,"&gt;");
        html = html.replace(/\"/g,"&quot;");
        $("#prettyprint").empty();
        $("#prettyprint").html(html);
        prettyPrint();
    });
}