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
	dupa;
	constructor(title, author, uuid, randomPic, description, dupa) {
		this.title = title;
		this.author = author;
		this.uuid = uuid;
		this.randomPic = randomPic;
		this.description = description;
		this.dupa = dupa;
	}
}

const lukasz = new User("lukasz", "milde", "124iudhbcujd");
const ksiazka = new Book(
	"lal",
	"dupek",
	"145jkgh",
	"pic",
	"wihdlskhd",
	"dupeczka"
);

console.log(lukasz);
console.log(ksiazka);
