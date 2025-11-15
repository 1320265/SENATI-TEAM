/* ======================================================================================
   HERO SLIDER (Imagen gigante que cambia automáticamente)
   ====================================================================================== */

// // Selecciono el header donde cambia la imagen gigante
const hero = document.getElementById("hero");

// // Lista de imágenes grandes (usa nombres libro1...libro10)
const imagenes = [
    "img/libro1.jpg",   // libro1
    "img/libro2.jpg",   // libro2
    "img/libro3.jpg",   // libro3
    "img/libro4.jpg",   // libro4
    "img/libro5.jpg",   // libro5
    "img/libro6.jpg",   // libro6
    "img/libro7.jpg",   // libro7
    "img/libro8.jpg",   // libro8
    "img/libro9.jpg",   // libro9
    "img/libro10.jpg"   // libro10
];

let index = 0;

// // Función que cambia la imagen de fondo del hero
function cambiarImagen() {
    // // Aquí cambiamos la imagen del banner gigante
    hero.style.backgroundImage = `url('${imagenes[index]}')`;
    index = (index + 1) % imagenes.length; // // Para reiniciar después de la 10
}

// // Inicializar
cambiarImagen();                   // // Muestra la primera imagen
setInterval(cambiarImagen, 4000);  // // Cambia cada 4 segundos (modifica si quieres)

/* ======================================================================================
   TARJETAS DE LIBROS PEQUEÑOS
   ====================================================================================== */

// // Array de libros (títulos y las mismas imágenes libro1...libro10)
const libros = [
    { titulo: "El Conjuro", imagen: "img/libro1.jpg" },
    { titulo: "It", imagen: "img/libro2.jpg" },
    { titulo: "La Monja", imagen: "img/libro3.jpg" },
    { titulo: "Toy Story", imagen: "img/libro4.jpg" },
    { titulo: "Shrek", imagen: "img/libro5.jpg" },
    { titulo: "Intensamente", imagen: "img/libro6.jpg" },
    { titulo: "Avengers Endgame", imagen: "img/libro7.jpg" },
    { titulo: "John Wick", imagen: "img/libro8.jpg" },
    { titulo: "Mad Max Fury Road", imagen: "img/libro9.jpg" },
    { titulo: "Avatar", imagen: "img/libro10.jpg" }
];

// // Donde agregamos las tarjetas
const contenedor = document.getElementById("libros");

// // Crear dinámicamente cada card
libros.forEach(libro => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <button>Más información</button>
    `;

    contenedor.appendChild(card);
});

/* ======================================================================================
   FORMULARIO (funcionalidad simple)
   ====================================================================================== */

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Gracias por contactarnos. ¡Pronto te responderemos!");
        form.reset();
    });
}
