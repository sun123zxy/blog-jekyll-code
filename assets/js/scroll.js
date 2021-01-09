$(window).scroll(function(e) {
    var cur = $(this).scrollTop();
    var tot = document.body.scrollHeight;
    $("body").css("background-position","0% "+String(cur/tot*100) + "%");
});