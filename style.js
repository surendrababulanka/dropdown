var dropdownBtn = document.getElementById("drop-text");
var list = document.getElementById("list");


dropdownBtn.onclick = function() {
    list.classList.toggle("show");
    if (
        list.classList.contains("show")) {
        icon.style.rotate = "0deg"
    } else {
        icon.style.rotate = "-180deg"
        }
};

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon" 
    ) {
        list.classList.remove("show");
        icon.style.rotate = "0deg";
    }
}