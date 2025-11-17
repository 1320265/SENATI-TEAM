document.addEventListener("DOMContentLoaded", () => {

    /* ============ HERO SLIDER ============ */

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

    /* ============ LIBROS ============ */

    const libros = [
        { titulo: "El Conjuro", imagen: "img/libro1.jpg", descripcion: "Descripción del libro 1." },
        { titulo: "It", imagen: "img/libro2.jpg", descripcion: "Descripción del libro 2." },
        { titulo: "La Monja", imagen: "img/libro3.jpg", descripcion: "Descripción del libro 3." },
        { titulo: "Toy Story", imagen: "img/libro4.jpg", descripcion: "Descripción del libro 4." },
        { titulo: "Shrek", imagen: "img/libro5.jpg", descripcion: "Descripción del libro 5." },
        { titulo: "Intensamente", imagen: "img/libro6.jpg", descripcion: "Descripción del libro 6." },
        { titulo: "Avengers Endgame", imagen: "img/libro7.jpg", descripcion: "Descripción del libro 7." },
        { titulo: "John Wick", imagen: "img/libro8.jpg", descripcion: "Descripción del libro 8." },
        { titulo: "Mad Max Fury Road", imagen: "img/libro9.jpg", descripcion: "Descripción del libro 9." },
        { titulo: "Avatar", imagen: "img/libro10.jpg", descripcion: "Descripción del libro 10." }
    ];

    const contenedor = document.getElementById("libros");

    function mostrarLibros(lista) {
        contenedor.innerHTML = "";
        lista.forEach(libro => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${libro.imagen}">
                <h3>${libro.titulo}</h3>
                <button class="btnInfo">Más información</button>
            `;
            contenedor.appendChild(card);

            // evento del modal
            card.querySelector(".btnInfo").addEventListener("click", () => {
                abrirModal(libro);
            });
        });
    }

    mostrarLibros(libros);

    /* ============ BUSCADOR ============ */

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const texto = searchInput.value.toLowerCase();
        const filtrados = libros.filter(l =>
            l.titulo.toLowerCase().includes(texto)
        );
        mostrarLibros(filtrados);
    });

    /* ============ MODAL ============ */

    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalImagen = document.getElementById("modalImagen");
    const modalDescripcion = document.getElementById("modalDescripcion");

    function abrirModal(libro) {
        modalTitulo.textContent = libro.titulo;
        modalImagen.src = libro.imagen;
        modalDescripcion.textContent = libro.descripcion;
        modal.style.display = "flex";
    }

    document.getElementById("cerrarModal").addEventListener("click", () => {
        modal.style.display = "none";
    });

});
