const carousel = document.getElementById('carousel');
let startX;
let currentRotation = 0;

carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    carousel.style.transition = 'none';
    document.addEventListener('mousemove', rotateCarousel);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', rotateCarousel);
    carousel.style.transition = 'transform 0.5s';
});

function rotateCarousel(e) {
    const deltaX = e.clientX - startX;
    currentRotation += deltaX * 0.2;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
    startX = e.clientX;
}