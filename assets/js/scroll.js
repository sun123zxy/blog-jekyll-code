var mxScrollSpeed = 0.007;
console.log("background scroller loaded");

var userAgent = navigator.userAgent;
//if (userAgent.indexOf("Firefox") > -1) {
    $(window).scroll(function(e) {
        var cur = $(this).scrollTop();
        var tot = document.body.scrollHeight;
        var pos;
        if(mxScrollSpeed * tot <= 100){ //speed control
            pos = mxScrollSpeed * cur;
        }else{
            pos = cur/tot*100;
        }
        $("body").css("background-position","0% "+ pos + "%");
    });
    console.log("background scroller activated");
/*}else{
    console.log("error: background scroller supports Firefox only");
    console.log("background scroller inactivated");
}*/