// script.js

// 1. Selecciona todos los botones y paneles (querySelectorAll)
const botones = document.querySelectorAll('.tab-btn');
const paneles = document.querySelectorAll('.tab-pane');

// 2. Añade un evento click a cada botón (usando forEach)
botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        
        // 3. Lógica del Click:
        // Quitar la clase .active de todos los botones y contenidos
        botones.forEach(b => b.classList.remove('active'));
        paneles.forEach(p => p.classList.remove('active'));

        // Poner .active al botón pulsado (usando e.target)
        const botonPulsado = e.target;
        botonPulsado.classList.add('active');

        // Leer el dataset.target del botón pulsado
        const targetId = botonPulsado.dataset.target;

        // Buscar el contenido con ese ID y ponerle .active
        const panelCorrespondiente = document.getElementById(targetId);
        panelCorrespondiente.classList.add('active');
    });
});