const myLibrary = [];
const addBook = document.querySelector('.add-book');
const overlay = document.getElementById('#overlay');
const exitButton = document.getElementById('#exit-button')

document.addEventListener("DOMContentLoaded", function() {
    const book1 = new Book("Harry Potter", "Donald", 254, "Punk/Rock", "Thrown Away");
    addBookToLibrary(book1);
    displayBooks();

    
});

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function displayBooks() {
    const bookContainer = document.querySelector('.book-container');

    myLibrary.forEach(function(book) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
        <p>Status: ${book.status}</p>
        `;

        bookContainer.appendChild(bookItem);
    })
}

function showFormOverlay() {
    overlay.style.display = 'block';
}

function hideFormOverlay() {
    overlay.style.display = 'none';
}