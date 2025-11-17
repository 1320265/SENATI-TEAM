/* ======================================================================================
   HERO SLIDER
====================================================================================== */
const hero = document.getElementById("hero");

const imagenes = [
    "img/libro1.jpg",
    "img/libro2.jpg",
    "img/libro3.jpg",
    "img/libro4.jpg",
    "img/libro5.jpg",
    "img/libro6.jpg",
    "img/libro7.jpg",
    "img/libro8.jpg",
    "img/libro9.jpg",
    "img/libro10.jpg"
];

let index = 0;

function cambiarImagen() {
    hero.style.backgroundImage = `url('${imagenes[index]}')`;
    index = (index + 1) % imagenes.length;
}

cambiarImagen();
setInterval(cambiarImagen, 4000);

/* ======================================================================================
   TARJETAS DINÁMICAS
====================================================================================== */
const libros = [
    { titulo: "El Conjuro", imagen: "img/libro1.jpg", descripcion: "Historia de terror clásica." },
    { titulo: "It", imagen: "img/libro2.jpg", descripcion: "El payaso Pennywise ataca." },
    { titulo: "La Monja", imagen: "img/libro3.jpg", descripcion: "Terror religioso extremo." },
    { titulo: "Toy Story", imagen: "img/libro4.jpg", descripcion: "Aventura animada inolvidable." },
    { titulo: "Shrek", imagen: "img/libro5.jpg", descripcion: "Comedia y fantasía." },
    { titulo: "Intensamente", imagen: "img/libro6.jpg", descripcion: "Emociones con vida propia." },
    { titulo: "Avengers Endgame", imagen: "img/libro7.jpg", descripcion: "Épica batalla final." },
    { titulo: "John Wick", imagen: "img/libro8.jpg", descripcion: "Acción extrema." },
    { titulo: "Mad Max", imagen: "img/libro9.jpg", descripcion: "Caos postapocalíptico." },
    { titulo: "Avatar", imagen: "img/libro10.jpg", descripcion: "Mundo visual espectacular." }
];

const contenedor = document.getElementById("libros");

libros.forEach((libro, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${libro.imagen}">
        <h3>${libro.titulo}</h3>
        <button class="btnInfo" data-id="${i}">Más información</button>
    `;

    contenedor.appendChild(card);
});

/* ======================================================================================
   MODAL
====================================================================================== */

const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

const mTitulo = document.getElementById("modalTitulo");
const mImg = document.getElementById("modalImagen");
const mDesc = document.getElementById("modalDescripcion");

document.querySelectorAll(".btnInfo").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const libro = libros[id];

        mTitulo.textContent = libro.titulo;
        mImg.src = libro.imagen;
        mDesc.textContent = libro.descripcion;

        modal.style.display = "flex";
    });
});

cerrarModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

/* ======================================================================================
   FORMULARIO
====================================================================================== */
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Gracias por tu mensaje. Te responderemos pronto.");
        form.reset();
    });
}
