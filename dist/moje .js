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


class Wypożyczenie {
  private dataWypożyczenia: Date;
  private dataZwrotu: Date;
  private wypożyczoneKsiążki: string[];
  private kara: number;
  private readonly KARA_ZA_DZIEŃ: number = 5;

  constructor(private użytkownik: User) {
    this.dataWypożyczenia = new Date();
    this.dataZwrotu = new Date();
    this.dataZwrotu.setDate(this.dataWypożyczenia.getDate() + 7); // ustawia datę zwrotu na 7 dni po wypożyczeniu
    this.wypożyczoneKsiążki = [];
    this.kara = 0;
  }

  dodajKsiążkę(nazwa: string): void {
    this.wypożyczoneKsiążki.push(nazwa);
  }

  usuńKsiążkę(nazwa: string): void {
    const index = this.wypożyczoneKsiążki.indexOf(nazwa);
    if (index !== -1) {
      this.wypożyczoneKsiążki.splice(index, 1);
    }
  }

  zwrot(): number {
    const dataZwrotu = new Date();
    const różnicaCzasu = dataZwrotu.getTime() - this.dataZwrotu.getTime();
    const dniZwłoki = Math.ceil(różnicaCzasu / (1000 * 3600 * 24));
    if (dniZwłoki > 0) {
      this.kara = dniZwłoki * this.KARA_ZA_DZIEŃ;
    }
    return this.kara;
  }

  getDataWypożyczenia(): Date {
    return this.dataWypożyczenia;
  }

  getDataZwrotu(): Date {
    return this.dataZwrotu;
  }

  getWypożyczoneKsiążki(): string[] {
    return this.wypożyczoneKsiążki;
  }

  getKara(): number {
    return this.kara;
  }
}