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
}
