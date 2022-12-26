var isMusicPlayerActivated = false;
$("#music-player .round-button").click(function(){
    if(isMusicPlayerActivated == false){
        $("#music-player").addClass("music-player-activated");
        $("#music-player .hover-info").html(
            '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=5244816970&auto=1&height=430"></iframe>'
        );
        isMusicPlayerActivated = true;
        console.log("Music player activated!")
    }else{
        $("#music-player").removeClass("music-player-activated");
        $("#music-player .hover-info").html("Music Player");
        isMusicPlayerActivated = false;
        console.log("Music player disabled!")
    }
});