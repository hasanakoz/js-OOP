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
}; //Book constructor prototype'ına fonksiyon ekliyoruz.
console.log(book4.getAge());

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.
//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

//INHERİTANCE************************

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype); // bu metodla prototype inherit edilebilir.

const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "September");

console.log(mag1);
console.log(mag1.getAge()); //prototype'dan otomatik inheritance olmuyor.
