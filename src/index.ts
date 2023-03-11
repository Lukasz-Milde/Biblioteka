interface UserType {
	name: string;
	surname: string;
	uuid: string;
	rentedBooks: BookType[];
}
class User implements UserType {
	constructor(
		public name: string,
		public surname: string,
		public uuid: string,
		public rentedBooks: BookType[]
	) {}
}

interface BookType {
	title: string;
	author: string;
	uuid: string;
	randomPic: string;
	description: string;
}

class Book implements BookType {
	constructor(
		public title: string,
		public author: string,
		public uuid: string,
		public randomPic: string,
		public description: string
	) {}
}

class Booking {
	public bookingDate: Date;
	public returnDate: Date;
	public rentedBooks: BookType[];
	public lateFee: number;
	public readonly FeePerDay: number = 5;

	constructor(private user: string) {
		this.bookingDate = new Date();
		this.returnDate = new Date();
		this.returnDate.setDate(this.bookingDate.getDate() + 7);
		this.rentedBooks = [];
		this.lateFee = 0;
	}

	rentBook(book: BookType): void {
		this.rentedBooks.push(book);
	}

	returnBook(book: BookType): void {
		const indexOfBook = this.rentedBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.rentedBooks.splice(indexOfBook, 1);
		}
	}

	returnCheck(): number {
		const returnDate = new Date();
		const returnDifference = returnDate.getDate() - this.returnDate.getDate();
		const delayDays = Math.ceil(returnDifference / (1000 * 3600 * 24));
		if (returnDifference > 0) {
			this.lateFee = delayDays * this.FeePerDay;
		}
		return this.lateFee;
	}

	getBookingDate(): Date {
		return this.bookingDate;
	}

	getReturnDate(): Date {
		return this.returnDate;
	}

	getRentedBooks(): BookType[] {
		return this.rentedBooks;
	}

	getLateFee(): number {
		return this.lateFee;
	}
}

class Library {
	constructor(
		private listOfBooks: BookType[],
		private availableBooks: BookType[],
		private listOfBookings: any[],
		private listOfUsers: UserType[]
	) {}
	addBookToLibrary(book: BookType): void {
		this.listOfBooks.push(book);
	}

	removeBookFromLibrary(book: BookType): void {
		const indexOfBook = this.availableBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.availableBooks.splice(indexOfBook, 1);
		}
	}

	rentBookForUser(book: BookType, user: UserType) {
		const indexOfBook = this.availableBooks.indexOf(book);
		if (indexOfBook !== -1) {
			user.rentedBooks.push(book);
		}
	}

	returnBookFromUser(book: BookType, user: UserType) {
		const indexOfBook = user.rentedBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.availableBooks.push(book);
		}
	}

	getListOfBookings(): any[] {
		return this.listOfBookings;
	}

	getListOfUsers(): UserType[] {
		return this.listOfUsers;
	}
}
