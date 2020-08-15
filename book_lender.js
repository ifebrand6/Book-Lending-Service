const store = ["a",'b','c']
class BookLender  {
    constructor () {
        this.store = [];
        this.lend_books = []
    }
    add(book){
        this.store.push(book);
    }
    burrow(book){
        this.lend_books.push(book);
        // remove from the store collection
        this.store = this.store.filter(function(item) {
            return item !== book
            })
    }
    return(book){
        // remove from lend_books
        this.lend_books = this.lend_books.filter(function(item) {
            return item !== book
            })
        // add to store collection
        this.store.push(book)
    }
    fire(change){
        let available_books = this.store;
        let burrowed_books = this.lend_books
        // display the books added DONE
        // the books available in the store DONE
        this.store.forEach(book => {
            book.update(change);
        });
        // a function to list the books in the store
        console.log("books avilabe in the store")
        available_books.map(e => {
            console.log('++ '+ e.book_title)
        })
        if (burrowed_books.length >= 1) {
            console.log("names of books lended out")
            burrowed_books.map(e => {
                console.log('-- '+ e.book_title)
            })
        }
    }
    notifier(change){
        console.log(change)
        let available_books = this.store;
        let burrowed_books = this.lend_books
        this.lend_books.forEach(book =>{
            book.alert(change)
        })
        if (change === 'RTN') {
            let bs = available_books[available_books.length - 1].book_title;
            console.log(bs + ' has been return')
        }
        console.log("books avilabe in the store")
        available_books.map(e => {
            console.log('++ '+ e.book_title)
        })
        if (burrowed_books.length >= 1) {
            console.log("names of books lended out")
            burrowed_books.map(e => {
                console.log('-- '+ e.book_title)
            })
        }
    }
}
class Observer {
    constructor (state) {
        this.book_title = state;
        // this.initialState = state
    }
    update(change){
        // a condtion to check what method has been called
        console.log(this.book_title + ' has been added')
    }
    alert(change){
        switch (change) {
            case 'LND':
                console.log(this.book_title + ' has been lent')
                break;
            case 'RTN':
                console.log(this.book_title + ' has been return')
               break;
        
            default:
                break;
        }
    }
}




let a = new Observer("name");
let b = new Observer("strange bird");
let c = new Observer("Octopus jj");

// console.log(a)
const test1 = new BookLender()
test1.add(a)
test1.add(b)
test1.add(c)
test1.fire()
// test1.notifier()
// console.log(test1)
// console.log(test1)
// test1.fire('>>>')
// console.log(test1)
// test1.fire()
test1.burrow(a)
test1.notifier('LND')
test1.return(a)
test1.notifier('RTN')
// test1.fire()
// console.log(test1)
//create new bookLender
// const test1 = new BookLender()
//manually added books to the store
// console.log(test1)
 const test2 = new Observer("yoha");
//  test1.burrow(test2)

//  console.log(typeoftest1.store)
//  test1.fire()
//  console.log(test1)`

// _______
// add a new book to the store
test1.add("harry porter")

// lend book to a user
// test1.burrow('a');
// test1.burrow('harry porter');
// console.log(test1)
// test1.return('harry porter')
// console.log(test1)
// observer update fuction will display the book that has been lent out
// const aBookrequrest = new Observer('c');
// console.log(aBookrequrest)
// test1.burrow(aBookrequrest)
// test1.fire()
// test1.fire()
console.log(
    `

    ◢◤████████████████████
    ████████████████████████
                ☻/
                /▌
                / \\
                
    █WELCOME TO IFE BOOK-STORE█

    ◥██████████████████████████◤

    `
)