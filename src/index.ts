class User {
	constructor(
		private name: string,
		private surname: string,
		private uuid: string
	) {}
}

class Book {
	constructor(
		private title: string,
		private author: string,
		private uuid: string,
		private randomPic: string,
		private description: string,
		private dupa: string
	) {}
}

class Booking {
	private bookingDate: Date;
	private returnDate: Date;
	private rentedBooks: string[];
	private lateFee: number;
	private readonly FeePerDay: number = 5;

	constructor(private user: string) {
		this.bookingDate = new Date();
		this.returnDate = 
	}
}
