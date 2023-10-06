const image = document.querySelector('.image-container img');

window.addEventListener('load', () => {
    // Use a timeout to delay the animation for a few milliseconds
    setTimeout(() => {
        image.style.left = '0'; // Slide the image in
    }, 200);
});