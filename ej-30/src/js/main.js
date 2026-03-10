const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Alternar clase para mostrar/ocultar menú [cite: 71, 78]
        nav.classList.toggle('nav-active');
        
        // Animación simple de burger
        burger.classList.toggle('toggle');
    });
}

navSlide();