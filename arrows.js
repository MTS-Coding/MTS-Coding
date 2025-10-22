document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel || items.length === 0 || !prevBtn || !nextBtn) {
        console.warn('Carrusel: faltan elementos en el DOM (carousel/items/btns).');
        return;
    }

    const totalItems = items.length;
    const step = 360 / totalItems;
    let angle = 0;
    let locked = false; // evita clicks demasiado rápidos

    const rotateTo = (delta) => {
        if (locked) return;
        locked = true;
        angle += delta;
        carousel.style.transform = `rotateY(${angle}deg)`;
        // desbloquear tras transición (coincide con tu transition: 0.6s)
        setTimeout(() => locked = false, 620);
    };

    nextBtn.addEventListener('click', () => rotateTo(-step));
    prevBtn.addEventListener('click', () => rotateTo(+step));

    // --- Opcional: navegación por teclado (izq/derecha) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') rotateTo(-step);
        if (e.key === 'ArrowLeft') rotateTo(+step);
    });

    // --- Aseguramos que las cards mantengan su posicion inicial en Z (por si las generás dinámicamente)
    // Establece las transforms en los items si no las tenés ya:
    items.forEach((it, idx) => {
        const deg = idx * step;
        it.style.transform = `rotateY(${deg}deg) translateZ(300px)`; // adapta translateZ si hace falta
    });
});
