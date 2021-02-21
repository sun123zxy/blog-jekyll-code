var titles = $("#post-body h1, #post-body h2, #post-body h3, #post-body h4, #post-body h5, #post-body h6");
titles.each(function(i){
    var lv = parseInt(this.tagName[1]);
    var id = $(this).attr("id");
    var text = '<div style="padding-left: ' + 10 * (lv - 1) + 'px">'
                + '<a href=#' + id + '>' + $(this).html() + '</a>' 
             + '</div>';
    console.log(text);
    $("#contents-detail").html($("#contents-detail").html() + text);
});