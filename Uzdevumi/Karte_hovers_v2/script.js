function togglePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

document.querySelector('.dropdown-content a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = infoBox.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
});

