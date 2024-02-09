function loaded() {
    console.log("The page has now loaded");
    fontrandom();
 
}
function display(x){
    console.log("hello")
    var text =" "
    var id = " "
    switch(x){
        case 1:
            console.log("hello 2")
            text="po would not be prosocuted";
            id = "a";
            break;
        case 2:
            text ="tinky winky would be a terrorist";
            id = "b";
            break;
        case 3:
            text ="laa-laa would be a terrorist";
            id = "c";
            break;
        case 4:
            text ="dispy would be a terrorist";
            id = "d";
            break;
        default:
            break;
    }
    document.getElementById(id).innerHTML= text;
}

function fontrandom(){
    let listOfFonts = ["monospace", "Courier", "Courier new", "Gill Sans","Calibri","Arial Narrow","Tahoma","Geneva","Verdana","Times","serif","Segoe UI"];
    Array.from(document.all).forEach(element => {
        fontIndex = Math.floor(Math.random() * listOfFonts.length);
        element.style = "font-family: " + listOfFonts[fontIndex];
        //console.log(element);
    })
}

