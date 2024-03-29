//---contents content---
console.log("detecting titles...")
var titles = $(".post-body h1, .post-body h2, .post-body h3, .post-body h4, .post-body h5, .post-body h6");
var curIdx = 0;
console.log(titles.length + " titles founded")
titles.each(function(i){
    var lv = parseInt(this.tagName[1]);
    var id = $(this).attr("id");
    var text = '<div id="contents-link-' + i + '" class="contents-link" style="padding-left: ' + 10 * (lv - 1) + 'px">'
                + '<a href=#' + id + '>' + $(this).html() + '</a>' 
             + '</div>';
    $("#contents .panel-content").append(text);
});
$("#contents .panel-content").append('<p></p>');
console.log("contents generated")
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
function UpdateSize(){
    var winTop = $(window).scrollTop();
    var winHeight =  $(window).height();
    var winBottom = winTop + winHeight;

    var calcMaxHeight = Math.min(winHeight, winBottom - StTop()) - $("#contents .panel-title").outerHeight();
    var calcTop = Math.max(0, Math.min(MxTop(), winTop) - StTop());
    $("#contents").css("top", Math.max(0, calcTop));
    $("#contents .panel-content").outerMaxHeight(calcMaxHeight);
}
function UpdateHighlight(){
    var winTop = $(window).scrollTop();
    var myTop = winTop + 10;
    var preIdx = curIdx;
    while(curIdx < titles.length - 1 && myTop >= titles.eq(curIdx + 1).offset().top){
        curIdx ++;
    }
    while(curIdx > 0 && myTop < titles.eq(curIdx).offset().top){
        curIdx --;
    }
    if(preIdx != curIdx || curIdx == 0){
        $("#contents-link-" + preIdx).removeClass("contents-link-highlight").addClass("contents-link");
        $("#contents-link-" + curIdx).removeClass("contents-link").addClass("contents-link-highlight");
    }
    //console.log("current title: " + curIdx);
}
function Update(){
    UpdateSize();
    UpdateHighlight();
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