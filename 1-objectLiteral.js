//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "Karamazov Brothers",
  author: "Dostoyevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.hasOwnProperty("author")); //true

const book2 = {
  title: "The Lily of the Valley",
  author: "Balzac",
  year: 1888,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)

//? OBJECT CONSTRUCTOR

function Book(title, author, year) {
  (this.title = title),
    (this.author = author),
    (this.year = year),
    (this.getSummary = function () {
      return `${this.title} was written by ${this.author} in ${this.year}`;
    });
}

const book3 = new Book("Kaşağı", "Ömer Seyfettin", 1920);
const book4 = new Book("Sinekli Bakkal", "H. Edip ADIVAR", 1930);

console.log(book3);

book3.price = 100;
console.log(book3);

Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
console.log(book4.getAge());
