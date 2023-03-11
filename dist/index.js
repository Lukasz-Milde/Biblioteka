"use strict";
class User {
	name;
	surname;
	uuid;
	rentedBooks;
	constructor(name, surname, uuid, rentedBooks) {
		this.name = name;
		this.surname = surname;
		this.uuid = uuid;
		this.rentedBooks = rentedBooks;
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
class Library {
	listOfBooks;
	availableBooks;
	listOfBookings;
	listOfUsers;
	constructor(listOfBooks, availableBooks, listOfBookings, listOfUsers) {
		this.listOfBooks = listOfBooks;
		this.availableBooks = availableBooks;
		this.listOfBookings = listOfBookings;
		this.listOfUsers = listOfUsers;
	}
	addBookToLibrary(book) {
		this.listOfBooks.push(book);
	}
	removeBookFromLibrary(book) {
		const indexOfBook = this.availableBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.availableBooks.splice(indexOfBook, 1);
		}
	}
	rentBookForUser(book, user) {
		const indexOfBook = this.availableBooks.indexOf(book);
		if (indexOfBook !== -1) {
			user.rentedBooks.push(book);
		}
	}
	returnBookFromUser(book, user) {
		const indexOfBook = user.rentedBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.availableBooks.push(book);
		}
	}
	getListOfBookings() {
		return this.listOfBookings;
	}
	getListOfUsers() {
		return this.listOfUsers;
	}
}
