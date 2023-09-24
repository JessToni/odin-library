const myLibrary = [];

document.addEventListener("DOMContentLoaded", function() {
    const addBook = document.querySelector('.add-book');
    const overlay = document.getElementById('overlay');
    const exitButton = document.getElementById('exit-btn');
    const addBookForm = document.getElementById('add-book-form');

    displayBooks();

    addBook.addEventListener('click', function() {
        showFormOverlay();
    });

    exitButton.addEventListener('click', function(){
        hideFormOverlay();
    })

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = parseInt(document.getElementById('pages').value);
        const genre = document.getElementById('genre').value;

        const statusCheckbox = document.getElementById('status');
        const status = statusCheckbox.checked ? 'Read' : 'Not Read'

        const newBook = new Book(title, author, pages, genre, status);

        addBookToLibrary(newBook);

        displayBooks();

        addBookForm.reset();

        hideFormOverlay();
    })
});

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;

    //Remove function for remove button
    this.remove = function() {
        const indexToRemove = myLibrary.indexOf(this);
        if (indexToRemove !== -1) {
            myLibrary.splice(indexToRemove, 1);
            displayBooks();
        } 
    }

    //Function to toggle read status
    this.toggleStatus = function() {
        this.status = this.status === 'Read' ? 'Not Read' : 'Read';
        this.statusButton.textContent = this.status
        displayBooks();
    }

    //Toggle status button
    this.statusButton = document.createElement('button');
    this.statusButton.textContent = this.status;
    this.statusButton.addEventListener('click', this.toggleStatus.bind(this));

    //Remove button, its text content, and click listener
    this.removeButton = document.createElement('button');
    this.removeButton.textContent = 'Remove';
    this.removeButton.addEventListener('click', this.remove.bind(this));
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function displayBooks() {
    const bookContainer = document.querySelector('.book-container');
    /*Remove appended elements to book container*/
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }

    myLibrary.forEach(function(book) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
        <h2>Title: ${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
        `;

        bookItem.appendChild(book.statusButton);
        bookItem.appendChild(book.removeButton);

        bookContainer.appendChild(bookItem);
    })
}

function showFormOverlay() {
    overlay.style.display = 'block';
}

function hideFormOverlay() {
    overlay.style.display = 'none';
}