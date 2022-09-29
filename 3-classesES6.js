//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.getTitle = function () {
      //Bu alandaki fonksiyon bütün instancelarda yer alır.
      return this.title;
    };
  }

  getAge() {
    // Bu fonksiyonlar prototype de yeralır.
    return new Date().getFullYear() - this.year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book1 = new Book("Kaşağı", "Ömer Seyfettin", 1920);

console.log(book1.getAge());

//**********INHERITANCE */

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("scientific Research", "Einstein", 1926, "sep");
console.log(mag1);
