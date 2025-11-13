// Array de libros de ejemplo
const books = [
    { title: "Cien Años de Soledad", image: "images/cien_anos.jpg" },
    { title: "El Principito", image: "images/principito.jpg" },
    { title: "1984", image: "images/1984.jpg" },
    { title: "Harry Potter", image: "images/harry_potter.jpg" }
];

// Seleccionamos el contenedor
const container = document.getElementById('books-container');

// Insertamos los libros
books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="info">
            <h3>${book.title}</h3>
        </div>
    `;
    container.appendChild(card);
});
