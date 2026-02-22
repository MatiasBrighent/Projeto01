document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastY = window.scrollY;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        if (y > lastY && y > 100) { // scrolling down past 100px
            header.classList.add('header--is-hidden');
        } else {
            header.classList.remove('header--is-hidden');
        }

        lastY = y;
    }, { passive: true });
});