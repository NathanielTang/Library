let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(this.title + "by" + this.author + "is" + this.pages + "long.");
  };
}

const shelf = document.querySelector(".shelf");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById('read')

function addBookToLibrary() {
  let bookTitle = title.value;
  let bookAuthor = author.value;
  let bookPages = pages.value;
  let bookRead = read.checked;
  

  let newBook = new book(bookTitle, bookAuthor, bookPages, bookRead);

  myLibrary.push(newBook);
  
}

const addToLibrary = document.getElementById("addToLibrary");
addToLibrary.addEventListener("click", addBookToLibrary);
addToLibrary.addEventListener("click", createLibrary);
addToLibrary.addEventListener("click", clearForm);

/* test

const catch22 = new book("Catch 22", "Joseph Heller", 522, true)
myLibrary.push(catch22)

const catch21 = new book("Catch 21", "Joseph Heller", 521, false)
myLibrary.push(catch21) */

let test = document.getElementById('banner')

function createLibrary() {
    shelf.innerHTML = '';
    myLibrary.forEach((element, index) => {
      
        let bookSpot = document.createElement("div");
        bookSpot.classList.add("card");
        let bookTitle = document.createElement("p");
        bookSpot.appendChild(bookTitle);
        let bookAuthor = document.createElement("p");
        bookSpot.appendChild(bookAuthor);
        let bookPages = document.createElement("p");
        bookSpot.appendChild(bookPages);
        
        bookTitle.textContent = `title: ${myLibrary[index].title}`;
        bookAuthor.textContent = `author: ${myLibrary[index].author}`;
        bookPages.textContent = `pages: ${myLibrary[index].pages}`;
        
        
        shelf.appendChild(bookSpot);

        //checkbox
        
        if (myLibrary[index].read) {
        let checkboxDiv = document.createElement('div');
        bookSpot.appendChild(checkboxDiv)
        let bookRead =  document.createElement("input")
        bookRead.type = 'checkbox';
        bookRead.id = 'book-read';
        bookRead.checked = true;
        checkboxDiv.appendChild(bookRead)
        let bookReadLabel = document.createElement('label');
        bookReadLabel.setAttribute("for", "book-read");
        bookReadLabel.textContent = "Read";
        checkboxDiv.appendChild(bookReadLabel)
        bookRead.textContent = "read";
        bookRead.dataset.index = `${index}`;
        bookRead.addEventListener('click', bookReadStatus)}
        else {
          let checkboxDiv = document.createElement('div');
        bookSpot.appendChild(checkboxDiv)
        let bookRead =  document.createElement("input")
        bookRead.type = 'checkbox';
        bookRead.id = 'book-read';
        checkboxDiv.appendChild(bookRead)
        let bookReadLabel = document.createElement('label');
        bookReadLabel.setAttribute("for", "book-read");
        bookReadLabel.textContent = "Read";
        checkboxDiv.appendChild(bookReadLabel)
        bookRead.textContent = "read";
        bookRead.dataset.index = `${index}`;
        bookRead.addEventListener('click', bookReadStatus)
        }
       
       

        //delete

        const deleteButton = document.createElement("button");
        
        bookSpot.appendChild(deleteButton);
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.dataset.index = `${index}`;

        console.log(deleteButton.dataset)

        deleteButton.addEventListener('click', deleteBook);
        deleteButton.addEventListener('click', createLibrary);
    })
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function deleteBook() {
    let index = parseInt(this.dataset.index);
    myLibrary.splice(index, 1)
}

function bookReadStatus() {
    let index = parseInt(this.dataset.index);
    if (myLibrary[index].read === true) {
      myLibrary[index].read = false
    } else if (myLibrary[index].read === false) {
      myLibrary[index].read = true
    }
}


//next, add function to clear values of input when submitting. Also
//clear the library when clicking button so it doesn't overlap
