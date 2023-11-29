function onhover(){
    document.getElementById("exoin").style.display = "block";
    document.getElementById("img").style.display = "none";
}
function outhover(){
    document.getElementById("exoin").style.display = "none";
    document.getElementById("img").style.display = "block";
    document.getElementById("img").style.marginLeft="29%";

}
function soundon(){
    document.getElementById("exomv").muted=false;
    document.getElementById("m").style.display = "block";
    document.getElementById("unm").style.display = "none";
}
function soundoff(){
    document.getElementById("exomv").muted=true;
    document.getElementById("m").style.display = "none";
    document.getElementById("unm").style.display = "block";
}