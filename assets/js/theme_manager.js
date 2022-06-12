var preloadCount = -1;
var preloadCountCallBack = null;
function CountPreload(count=-1, callBack = null){
    if(count == -1){
        preloadCount--;
    }else{
        preloadCount = count;
        preloadCountCallBack = callBack;
    }

    console.log   ("loading preloads... " + preloadCount + " remaining");
    ShowSwitchInfo("loading preloads... " + preloadCount + " remaining");

    if(preloadCount == 0){
        preloadCount = -1;

        console.log("all preloads loaded!");
        ShowSwitchInfo("all preloads loaded!", 1000); 

        preloadCountCallBack();
    }
}
function LoadTheme(themeId){
    $("#theme-container").attr("href", "");
    if(themesDat[themeId].night == true){
        $("#night-container").attr("href", "/assets/css/night.css");
        console.log("Night mode enabled!")
    }else{
        $("#night-container").attr("href", "");
    }
    
    CountPreload(themesDat[themeId]["preloads"].length, function(){ // load theme stylesheet after all preloads are loaded
        $("#theme-container").attr("href", themesDat[themeId].src);
    });
    themesDat[themeId]["preloads"].forEach(function(src){
        var img = new Image();
        img.onload = function(){
            img.onload = null;
            CountPreload();
        }
        img.src = src;
    });
}
function SwitchTheme(themeId){
    var maskColor = "black";
    //var maskColor = $(":root").css("--background-color").trim().substring(0, 7); //kill spaces and ignore alpha
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
    var strId = localStorage["themeId"];
    if(value == -1){ //get
        if(strId == null) return null;
        else return parseInt(strId);
    }else{ //set
        localStorage["themeId"] = value;
        console.log("themeId set to " + value);
    }
}

console.log("theme manager activated")
if(ThemeId() == null || ThemeId() >= themesDat.length){
    console.log("no valid cookie detected, initializing themeId...")
    ThemeId(0);
}
LoadTheme(ThemeId());
console.log("theme deployed")
$("#theme-switch .round-button").click(function(){
    ThemeId((ThemeId() + 1) % themesDat.length);
    SwitchTheme(ThemeId());
});