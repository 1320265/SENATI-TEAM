// Cargar libros dinámicamente
fetch('js/libros.json')
    .then(res => res.json())
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
    .catch(err => console.error("Error cargando libros:", err));


const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        form.reset();
    });
}
