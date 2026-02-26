// 1. Declarar constantes para el div (la caja) y los botones [cite: 48]
// Usamos getElementById como se indica en la guía [cite: 49]
const caja = document.getElementById('miCaja');
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// 2. Evento click para cambiar el color [cite: 50]
btnColor.addEventListener('click', () => {
    // Cambiamos el estilo directamente "a la fuerza" [cite: 51, 56]
    caja.style.backgroundColor = 'purple'; 
});

// 3. Evento click para cambiar el texto [cite: 52]
btnTexto.addEventListener('click', () => {
    // Modificamos el contenido interno [cite: 53]
    caja.innerText = 'Hola JS';
});

// 4. Bonus: Agregar nuevos elementos a la lista [cite: 54]
btnAgregar.addEventListener('click', () => {
    // Creamos el elemento 'li' y lo añadimos al final de la lista [cite: 54]
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerText = 'Nuevo Elemento';
    lista.appendChild(nuevoElemento);
});
