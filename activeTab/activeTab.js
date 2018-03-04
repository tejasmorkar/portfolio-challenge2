document.getElementById("first").click();
function activate(evt, feild) {
    var i, tab1content, tab1links;
    tab1content = document.getElementsByClassName("tab1content");
    for (i = 0; i < tab1content.length; i++) {
        tab1content[i].style.display = "none";
    }
    tab1links = document.getElementsByClassName("tab1links");
    for (i = 0; i < tab1links.length; i++) {
        tab1links[i].className = tab1links[i].className.replace(" active", "");
    }
    document.getElementById(feild).style.display = "flex";
    evt.currentTarget.className += " active"; 
}