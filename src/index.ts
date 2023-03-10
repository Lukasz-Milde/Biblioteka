class User {
	constructor(
		private name: string,
		private surname: string,
		private uuid: string
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
	) {
		this.title = title;
		this.author = author;
		this.uuid = uuid;
		this.randomPic = randomPic;
		this.description = description;
	}
}

class Booking {
	private bookingDate: Date;
	private returnDate: Date;
	private rentedBooks: string[];
	private lateFee: number;
	private readonly FeePerDay: number = 5;

	constructor(private user: string) {
		this.bookingDate = new Date();
		this.returnDate = new Date();
		this.returnDate.setDate(this.bookingDate.getDate() + 7);
		this.rentedBooks = [];
		this.lateFee = 0;
	}

	rentBook(book: any): void {
		this.rentedBooks.push(book);
	}
	returnBook(book: any): void {
		const indexOfBook = this.rentedBooks.indexOf(book);
		if (indexOfBook !== -1) {
			this.rentedBooks.splice(indexOfBook, 1);
		}
	}
}
