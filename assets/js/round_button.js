$(".hover-info").hide();
$(".round-button-handler").hover(function(){
    $(this).find(".hover-info").fadeIn("fast");
},function(){
    $(this).find(".hover-info").fadeOut("fast");
});

$("#theme-switch").hover(function(){
    $(this).find(".hover-info").text("Theme Switch");
});
$("#theme-info").hover(function(){
    $(this).find(".hover-info").text("Theme Info");
});
$("#theme-info .round-button").click(function(){
    $("#theme-info .hover-info").text(themesDat[ThemeId()].info);
});
function ShowSwitchInfo(text, duration = null){
    $("#theme-switch .hover-info").text(text);
    $("#theme-switch .hover-info").fadeIn("fast");
    if(duration != null){
        setTimeout(function(){
            $("#theme-switch .hover-info").fadeOut("fast");
        }, duration);
    }
}