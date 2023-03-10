"use strict";
class User {
    name;
    surname;
    uuid;
    constructor(name, surname, uuid) {
        this.name = name;
        this.surname = surname;
        this.uuid = uuid;
    }
}
class Book {
    title;
    author;
    uuid;
    randomPic;
    description;
    constructor(title, author, uuid, randomPic, description) {
        this.title = title;
        this.author = author;
        this.uuid = uuid;
        this.randomPic = randomPic;
        this.description = description;
    }
}
class Booking {
    user;
    bookingDate;
    returnDate;
    rentedBooks;
    lateFee;
    FeePerDay = 5;
    constructor(user) {
        this.user = user;
        this.bookingDate = new Date();
        this.returnDate = new Date();
        this.returnDate.setDate(this.bookingDate.getDate() + 7);
        this.rentedBooks = [];
        this.lateFee = 0;
    }
    rentBook(book) {
        this.rentedBooks.push(book);
    }
    returnBook(book) {
        const indexOfBook = this.rentedBooks.indexOf(book);
        if (indexOfBook !== -1) {
            this.rentedBooks.splice(indexOfBook, 1);
        }
    }
    returnCheck() {
        const returnDate = new Date();
        const returnDifference = returnDate.getDate() - this.returnDate.getDate();
        const delayDays = Math.ceil(returnDifference / (1000 * 3600 * 24));
        if (returnDifference > 0) {
            this.lateFee = delayDays * this.FeePerDay;
        }
        return this.lateFee;
    }
    getBookingDate() {
        return this.bookingDate;
    }
    getReturnDate() {
        return this.returnDate;
    }
    getRentedBooks() {
        return this.rentedBooks;
    }
    getLateFee() {
        return this.lateFee;
    }
}
