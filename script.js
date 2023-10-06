document.addEventListener("DOMContentLoaded", function() {
    // Show the popup when the page loads
    document.getElementById("popup").style.display = "flex";

    // Close the popup when clicked
    document.getElementById("popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
});