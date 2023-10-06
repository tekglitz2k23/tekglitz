// script.js
const image = document.querySelector('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
        image.style.left = '0';
    } else {
        image.style.left = '-100%';
    }
}

window.addEventListener('scroll', debounce(checkSlide));
