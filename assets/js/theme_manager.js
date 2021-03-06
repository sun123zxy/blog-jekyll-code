var themes = [
    "/assets/css/day.css",
    "/assets/css/night.css"
];
function LoadTheme(themeId){
    $("#theme-container").attr("href", themes[themeId]);
}
function SwitchTheme(themeId){
    var maskColor = $(":root").css("--background-color").trim().substring(0, 7); //kill spaces and ignore alpha
    //var maskColor = themeId?"black":"white";
    console.log("maskColor: " + maskColor);
    $("#mask").css({
        "z-index": "233", //put on top
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "background-color": maskColor, 
        "opacity": 0
    });
    $("#mask").animate({"opacity": 1}, 750, function(){
        LoadTheme(themeId);
    });
    $("#mask").animate({"opacity": 0}, 750, function(){
        $("#mask").css({
            "z-index": "0",
            "position": "unset",
            "top": "unset",
            "right": "unset",
            "bottom": "unset",
            "left": "unset"
        });
    });
}

function ThemeId(value=-1){
    strId = localStorage["themeId"];
    if(value == -1){ //get
        if(strId == null) return null;
        else return parseInt(strId);
    }else{ //set
        localStorage["themeId"] = value;
        console.log("themeId set to " + value);
    }
}

if(ThemeId() == null) ThemeId(0);
LoadTheme(ThemeId());

$("#theme-switch").click(function(){
    ThemeId((ThemeId() + 1) % themes.length);
    SwitchTheme(ThemeId());
});