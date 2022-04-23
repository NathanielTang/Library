let myLibrary = [];


function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(this.title + "by" + this.author + "is" + this.pages + "long.")
    }
}

const shelf = document.querySelector('.shelf')

function addBookToLibrary() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;

    let newBook = new book(bookTitle, bookAuthor, bookPages, true)

    myLibrary.push(newBook)
    console.log(myLibrary)
}

const addToLibrary = document.getElementById('addToLibrary');
addToLibrary.addEventListener('click', addBookToLibrary)
addToLibrary.addEventListener('click', createLibrary)


// test

const catch22 = new book("Catch 22", "Joseph Heller", 522, true)
myLibrary.push(catch22)

const catch21 = new book("Catch 21", "Joseph Heller", 521, false)
myLibrary.push(catch21)


function createLibrary() {
    myLibrary.forEach((element, index) => {
    let bookSpot = document.createElement('p');
    let bookDetails = document.createTextNode(`title: ${myLibrary[index].title}
    author: ${myLibrary[index].author} pages: ${myLibrary[index].pages}`)
    bookSpot.appendChild(bookDetails);
    shelf.appendChild(bookSpot)
})
}
