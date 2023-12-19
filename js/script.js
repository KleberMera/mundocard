document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('image-carousel');
    let currentIndex = 0;

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(nextImage, 5000);
});