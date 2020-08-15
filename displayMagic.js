const  displayBookStore = (available_books,burrowed_books)=> {
    console.log(`
    ██████████████████████████████
    ╬BOOKS   STORE               ╬
    ╬════════════════════════════╬
    ╬ BOOK AVAILABLE IN STORE:${available_books.length}	 ╬
    ╩════════════════════════════╩
    ╬════════════════════════════╬
    `)
    available_books.map(e => {
        console.log(`    BOOK NAME:  ${e.book_title}`)
    })
    if (burrowed_books.length >= 1) {
        console.log(`    ╬════════════════════════════╬
    ╬ LIST OF BOOKS LENT         ╬
    ╬ BOOKS LENDED: ${burrowed_books.length}            ╬
    ╩════════════════════════════╩
        `)
        burrowed_books.map(e => {
            console.log(`    BOOK NAME:  ${e.book_title}`)
        })
    }
    console.log(`
    ╩════════════════════════════╩
    ◥█████████████████████████████◤
    `)
}
const welcomeMessage = () => {
    console.log(`

    ◢◤███████████████████████████████████
    ████████████████████████████████████
                ☻/
                /▌
                / \\
    █WELCOME TO IFE BOOK-STORE█

    ◥███████████████████████████████████◤


    `)
}
exports.displayBookStore = displayBookStore
exports.welcomeMessage = welcomeMessage