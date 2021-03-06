//---contents content---
var titles = $("#post-body h1, #post-body h2, #post-body h3, #post-body h4, #post-body h5, #post-body h6");
titles.each(function(i){
    var lv = parseInt(this.tagName[1]);
    var id = $(this).attr("id");
    var text = '<div style="padding-left: ' + 10 * (lv - 1) + 'px">'
                + '<a href=#' + id + '>' + $(this).html() + '</a>' 
             + '</div>';
    console.log(text);
    $("#contents .panel-content").append(text);
});
$("#contents .panel-content").append('<p></p>');
//---position manager---
function MxTop(){
    return $("#main").offset().top + $("#main").outerHeight() - $("#contents").outerHeight();
}
function StTop(){
    return $("#contents").offset().top - parseFloat($("#contents").css("top"));
}

$.fn.outerMaxHeight = function(value){
    this.css("max-height", value - (this.outerHeight() - this.height()));
};
function Update(){
    var winTop = $(window).scrollTop();
    var winHeight =  $(window).height();
    var winBottom = winTop + winHeight;

    var calcMaxHeight = Math.min(winHeight, winBottom - StTop()) - $("#contents .panel-title").outerHeight();
    var calcTop = Math.max(0, Math.min(MxTop(), winTop) - StTop());
    $("#contents").css("top", Math.max(0, calcTop));
    $("#contents .panel-content").outerMaxHeight(calcMaxHeight);
}

$(window).scroll(function(e){
    Update();
});
$(window).resize(function(){
    Update();
});
$((function(){
    Update();
}));