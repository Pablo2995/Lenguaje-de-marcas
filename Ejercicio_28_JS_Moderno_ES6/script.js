// Ejercicio 28: ES6+

const container = document.getElementById('resultado');

// 1. Convierte esta función a Arrow Function
// Las Arrow Functions son más concisas, especialmente para callbacks.
const saludar = (nombre) => `Hola ${nombre}`;

// 2. Dado el siguiente array de objetos:
const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];

// 3. Usa .filter() (con arrow function) para encontrar a los de rol 'Admin'
// .filter() selecciona elementos de un array sin necesidad de usar bucles for.
const admins = usuarios.filter(usuario => usuario.rol === 'Admin');

// 4. Renderiza la lista en el DOM usando Template Literals (``) y .map()
// .map() transforma cada elemento en un nuevo valor.
const listaHTML = admins.map(u => `<li>${u.nombre} - ${u.rol}</li>`);

// Finalmente, inyectamos ese array en el HTML usando .join('') e innerHTML.
container.innerHTML = `
    <h2>Administradores:</h2>
    <ul>
        ${listaHTML.join('')}
    </ul>
`;