document.addEventListener("DOMContentLoaded", function(event) {
    const myLibrary = [];

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

    const book1 = new Book("Harry Potter", "Donald", 254, "Punk/Rock", "Thrown Away");
});