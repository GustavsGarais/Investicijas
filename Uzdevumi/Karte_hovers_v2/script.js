function togglePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}
