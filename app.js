let linkList = document.getElementById("link-list");
let closeicon = document.getElementById("close-icon");
let showicon = document.getElementById("show-icon");
let logo = document.getElementById("cont-logo");

function showList() {
    if (window.matchMedia("(min-width: 320px)").matches) {
    if (linkList.style.display === "block") {
        linkList.style.display = "none";
        closeicon.style.display = "none";
        showicon.style.display = "block";
        logo.style.display = "block";
        } else {
        linkList.style.display = "block";
        closeicon.style.display = "block";
        showicon.style.display = "none";
        logo.style.display = "none";
        }
    }
}
