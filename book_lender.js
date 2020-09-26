const {
    welcomeMessage,
    displayBookStore
} = require('./displayMagic');
class BookLender {
    constructor() {
        this.store = [];
        this.lend_books = []
    }
    add(book) {
        this.store.push(book);
    }
    burrow(book) {
        this.lend_books.push(book);
        // remove from the store collection
        this.store = this.store.filter(function (item) {
            return item !== book
        })
    }
    return (book) {
        // remove from lend_books
        this.lend_books = this.lend_books.filter(function (item) {
            return item !== book
        })
        // add to store collection
        this.store.push(book)
    }
    notifier(change) {
        let available_books = this.store;
        let burrowed_books = this.lend_books
        switch (change) {
            case 'LND':
                this.lend_books.forEach(book => {
                    book.update(change)
                })
                break;
            case 'RTN':
                let book_title = available_books[available_books.length - 1].book_title;
                console.log(`💬 Notification: The book '${book_title}' has been Returned`)
                break;
            default:
                this.store.forEach(book => {
                    book.update(change);
                });
                break;
        }
        displayBookStore(available_books, burrowed_books);
    }
}
class Observer {
    constructor(state) {
        this.book_title = state;
    }
    update(change) {
        switch (change) {
            case 'LND':
                console.log(`💬 Notification: The book '${this.book_title}' has been Borrowed`)
                break;
            default:
                console.log(`💬 Notification: The book '${this.book_title}' has been Added to the Store`)
                break;
        }
    }
}

let cleanCode = new Observer("Clean code by uncle bob");
let strangeBird = new Observer("strange bird by udeh ifechi");
let octupusJujuMan = new Observer("Octopus juju man by the thinking man");
welcomeMessage()

// USE CASE
const pseudoBookShop = new BookLender()
pseudoBookShop.add(cleanCode)
pseudoBookShop.add(strangeBird)
pseudoBookShop.add(octupusJujuMan)
pseudoBookShop.notifier()
pseudoBookShop.burrow(strangeBird)
pseudoBookShop.notifier('LND')
pseudoBookShop.return(strangeBird)
pseudoBookShop.notifier('RTN');
