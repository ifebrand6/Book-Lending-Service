const {
    bookStore,
    book
} = require('./book_lender')

describe('BOOKSHOP STORE STATUS', () => {
    let Store, firstBook, secondBook, bookCatelog, bookTitle
    beforeEach(async () => {
        Store = new bookStore();
        firstBook = new book("Premier Book");
        secondBook = new book('Second Book');
        bookCatelog = Store.store

    })
    test('should check that store is empty when app is initialised', () => {
        expect(bookCatelog).toEqual([]);
    })
    test('should check that store contains "Premier Book " addbook with selected  function is called on book of choice..', () => {
        Store.add(firstBook);
        bookTitle = bookCatelog[bookCatelog.length - 1].book_title
        expect(bookTitle).toBe('Premier Book');
    })
    test('should check that store contains "Second Book,Premier Book" add function is called on book of choice..', () => {
        Store.add(firstBook);
        bookTitle = bookCatelog[bookCatelog.length - 1].book_title
        expect(bookTitle).toBe('Premier Book');
        Store.add(secondBook);
        bookTitle = bookCatelog[bookCatelog.length - 1].book_title
        expect(bookTitle).toBe('Second Book');
    })
    test('should check that store contains  only "Second Book" lendBook on function is called on book of choice.', () => {
        Store.add(firstBook);
        Store.add(secondBook);
        let bookTitle = bookCatelog[bookCatelog.length - 1].book_title
        expect(bookTitle).toBe('Second Book');
        Store.burrow(secondBook);
        Store.burrow(firstBook)
        bookTitle = bookCatelog[bookCatelog.length - 1].book_title
        expect(bookTitle).toBe('Second Book');

    })


})
describe('OBSERVER PATTERN ', () => {
    let Store, firstBook, secondBook
    beforeEach(async () => {
        Store = new bookStore();
        firstBook = new book("Premier Book");
        secondBook = new book('Second Book');
    })
    test('should check that when a book is added BookLender object is notified', () => {
        Store.add(firstBook);
        Store.notifier()
        expect(firstBook.update()).toBe(`💬 Notification: The book 'Premier Book' has been Added to the Store`);
    })
    test('should check that when a book is burrowed BookLender object is notified', () => {
        Store.add(firstBook);
        Store.burrow(firstBook);
        Store.notifier()
        expect(firstBook.update('LND')).toBe(`💬 Notification: The book 'Premier Book' has been Borrowed`);
    })
    test('should check that when a book is returned, BookLender object is notified', () => {
        Store.add(firstBook);
        Store.burrow(firstBook);
        Store.return(firstBook);
        Store.notifier()
        // console.log(firstBook.update('RT'))
        expect(firstBook.update('RT')).toBe(`💬 Notification: The book 'Premier Book' has been Returned back.`);
    })

})