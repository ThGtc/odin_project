// La bibliothèque en elle-même : un array qui va être peuplé au fur et à mesure

let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = () => {
        if (read === true){
            return "Livre lu ! 👍"
        } else {
            return "Pas (encore) lu ! 📕"
        }
    }
    this.info = () => (`Titre : ${title} </br> Auteur : ${author} </br> ${pages} pages </br> ${this.read()}`)
    // console.log(book1.info())
}
// un exemple qui sera affiché par défaut
const book1 = new Book ('Le retour du roi', 'Tolkien', 600, false)
myLibrary.push(book1)

// Quelques exemples pour peupler la bibli et tester l'affichage sur plusieurs lignes :

function addBookToLibrary (title, author, pages, read){
    myLibrary.push(new Book (title, author, pages, read))
}

document.querySelector('.speedrun').addEventListener('click', () => {
    console.log('hello')
    addBookToLibrary('Notre Dame de Paris', 'Victor Hugo', 700, true);
    addBookToLibrary('Harry Potter', 'J.K. Rowling', 400, true);
    addBookToLibrary('Germinal', 'Émile Zola', 900, false);
    addBookToLibrary('Fondation', 'Isaac Asimov', 540, true);
    // addBookToLibrary('Notre Dame de Paris', 'Victor Hugo', 700, true);
    // addBookToLibrary('Harry Potter', 'J.K. Rowling', 400, true);
    // addBookToLibrary('Germinal', 'Émile Zola', 900, false);
    // addBookToLibrary('Notre Dame de Paris', 'Victor Hugo', 700, true);
    // addBookToLibrary('Harry Potter', 'J.K. Rowling', 400, true);
    // addBookToLibrary('Germinal', 'Émile Zola', 900, false);
    // addBookToLibrary('Notre Dame de Paris', 'Victor Hugo', 700, true);
    // addBookToLibrary('Harry Potter', 'J.K. Rowling', 400, true);
    // addBookToLibrary('Germinal', 'Émile Zola', 900, false);
    displayBooks()
})

document.querySelector('.clear').addEventListener('click', () => {
    console.log('hello')
    myLibrary = []
    bookArea.innerHTML = ""
})


// le formulaire pour ajouter un livre, qui s'intègrera ensuite dans notre bibliothèque :

let bookForm = document.getElementById('addBook');
bookForm.style.display="none";

document.querySelector('.newBook').addEventListener('click', () => {
    bookForm.style.display = 'flex',
    document.getElementById('bookTitle').focus()
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            bookForm.style.display = 'none'
        }
    });
});
document.querySelector('.close').addEventListener('click', () => bookForm.style.display = 'none');

// l'affichage de la bibliothèque sur l'interface :
const bookArea = document.querySelector(".displayedBook");

// d'abord l'ajout des données du formulaire à la bibli & l'insertion du nouveau bouquin dans la zone :

bookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const book2 = new Book(
        bookForm.bookTitle.value,
        bookForm.bookAuthor.value,
        parseInt(bookForm.bookPages.value),
        bookForm.bookStatus.checked);
    myLibrary.push(book2);
    bookForm.reset()
    bookForm.style.display = 'none'
    bookArea.innerHTML = "";
    displayBooks()
});


// création de chaque "livre" :

function displayBooks(){
    let x = myLibrary.length
    while (x > 0){
        // console.log(myLibrary[x-1]);

        const bookBox = document.createElement('div');
        bookArea.appendChild(bookBox);
        bookBox.className = "boxBook";

        const titleSpan = document.createElement('p');
        titleSpan.className = "boxTitle";
        bookBox.appendChild(titleSpan);
        titleSpan.innerText = `${myLibrary[x-1].title}`;

        const authorSpan = document.createElement('p');
        authorSpan.className = "boxAuthor";
        bookBox.appendChild(authorSpan);
        authorSpan.innerText = `Auteur : ${myLibrary[x-1].author}`;

        const pagesSpan = document.createElement('p');
        bookBox.appendChild(pagesSpan);
        pagesSpan.className = "boxPages";
        pagesSpan.innerText = `Nombre de pages : ${myLibrary[x-1].pages}`;

        const readStatus = document.createElement('p');
        bookBox.appendChild(readStatus);
        readStatus.className = "boxReadStatus"
        readStatus.innerText = myLibrary[x-1].read();

        const buttonSpace = document.createElement('div');
        bookBox.appendChild(buttonSpace);
        buttonSpace.className = "downButtons"

        const readButton = document.createElement('button');
        buttonSpace.appendChild(readButton);
        changeButtonAppearance()
        function changeButtonAppearance(){
            switch(true){
                case(readStatus.innerText == "Pas (encore) lu ! 📕"):
                    readButton.innerText = "Livre lu ?";
                    readButton.className = "readButton";
                    break;
                case(readStatus.innerText == "Livre lu ! 👍"):
                    readButton.innerText = "Livre non lu ?";
                    readButton.className = "notReadButton"
                    break;
            }
        }
        readButton.addEventListener('click', function changeBookStatus(){
            if (readStatus.innerText == "Pas (encore) lu ! 📕"){
                readStatus.innerText = "Livre lu ! 👍";
                changeButtonAppearance()
            } else{
                readStatus.innerText = "Pas (encore) lu ! 📕";
                changeButtonAppearance()
            }
        })

        const deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton"
        buttonSpace.appendChild(deleteButton);
        deleteButton.innerText = "✖"
        deleteButton.title = "Retirer ce livre de la bibliothèque ?"
        deleteButton.addEventListener('click', () => bookBox.remove())
        x--
    }
}
displayBooks();