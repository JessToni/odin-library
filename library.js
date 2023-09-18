const myLibrary = [];

document.addEventListener("DOMContentLoaded", function() {
    const book1 = new Book("Harry Potter", "Donald", 254, "Punk/Rock", "Thrown Away");
    addBookToLibrary(book1);
    console.log(myLibrary);
    console.log(book1);
});

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}
