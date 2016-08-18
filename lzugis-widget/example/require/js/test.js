define(["jquery"],function($){
    return {
        showMsg:function(msg){
            $("body").append("<h1>"+msg+"</h1>");
        },
        alertMsg:function(msg){
            alert(msg);
        }
    };
});