$(".hover-info").hide();
$(".round-button-handler").hover(function(){
    $(this).find(".hover-info").fadeIn("fast");
},function(){
    $(this).find(".hover-info").fadeOut("fast");
});