// Función para generar tarjetas de libros dinámicamente
fetch('js/libros.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('libros');
        data.libros.forEach(libro => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${libro.imagen}" alt="${libro.titulo}">
                <h3>${libro.titulo}</h3>
                <p>${libro.descripcion}</p>
                <details>
                    <summary>Más información</summary>
                    <p>${libro.detalles}</p>
                </details>
            `;
            contenedor.appendChild(card);
        });
    })
    .catch(err => console.error('Error cargando libros:', err));

// Formulario de contacto (simulado)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Gracias por contactarnos. ¡Pronto te responderemos!");
    form.reset();
});
