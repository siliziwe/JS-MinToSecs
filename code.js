function searchElement() {
    var min = window.prompt("Enter minutes value : ");
    var sec = Math.round(min / 0.01667);
    document.getElementsByTagName('h4')[0].innerHTML = sec + " sec";
}