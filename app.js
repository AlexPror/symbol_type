// 'use strict';
// /*
// Задание 1:
// Необходимо создать механизм для безопасного добавления метаданных к объектам
// книг с использованием ключей типа Symbol. Для чего необходимо:
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут
// необходимы для работы кода ниже.
// */

// // Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

// const reviewSymbol = Symbol("review");
// const ratingSymbol = Symbol("rating");
// const tagsSymbol = Symbol("tags");

// // Создадим класс Book

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     /**
//      * Метод извлекает из объекта значение под свойством metadataType
//      * и возвращает его.
//      * @param {Symbol} metadataType
//      * @returns {Array}
//      */
//     getMetadata(metadataType) {
//         if (!this[metadataType]) {
//             return [];
//         }
//         return this[metadataType];
//     }

//     /**
//      * Метод добавляет в объект массив под ключом metadataType, со значением
//      * data внутри. Если массив под данным свойством уже существует,
//      * тогда data просто будет добавлен в данный массив.
//      * @param {Symbol} metadataType
//      * @param {any} data
//      */
//     addMetadata(metadataType, data) {
//         if (!this[metadataType]) {
//             this[metadataType] = [];
//         }
//         this[metadataType].push(data);
//     }

//     getAverageRating() {
//         const arrRating = this.getMetadata(ratingSymbol);
//         if (!arrRating) {
//             return null;
//         }
//         let sum = 0;
//         for (let i = 0; i < arrRating.length; i++) {
//             sum += arrRating[i];
//         }
//         return Math.round((sum / arrRating.length) * 10) / 10;
//     }
//     hasTag(tag) {
//         const arrTags = this.getMetadata(tagsSymbol);
//         if (!arrTags) {
//             return false;
//         }
//         return arrTags.includes(tag);
//         // for (let i = 0; i < arrTags.length; i++) {
//         //     if (arrTags[i] === tag) {
//         //         return true;
//         //     }
//         // }
//         // return false;
//     }
//     reviewsCount() {
//         const arrReviews = this.getMetadata(reviewSymbol)
//         if (!arrReviews) {
//             return 0;
//         }
//         return arrReviews.length;
//     }
// }

// const book = new Book("1984", "George Orwell");
// book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
// book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
// book.addMetadata(ratingSymbol, 5);
// book.addMetadata(ratingSymbol, 4);
// book.addMetadata(ratingSymbol, 4);

// // ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
// console.log(book.getMetadata(reviewSymbol));
// console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4]
// console.log(book.getMetadata(tagsSymbol)); // []

// book.addMetadata(tagsSymbol, "novel");
// book.addMetadata(tagsSymbol, "dystopia");
// console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

// console.log(book.getAverageRating()); // 4.3
// console.log(book.hasTag("novel")); // true
// console.log(book.hasTag("blockbuster")); // false
// console.log(book.reviewsCount()); // 2

// let sym = Symbol.for("my symbol");
// console.log(sym);
// let sym2 = Symbol.for("my symbol");
// console.log(sym2 === sym);
// let symName = Symbol.keyFor(sym);
// console.log(symName);

// let person = {
//   name: "jack",
//   age: 20,
//   [Symbol("password")]: "Jack20",
// };
// console.log(person.password);

//========================================================

"use strict";
/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/

class BankAccount {
  #balance = 0;
  getBalance() {
    return Math.round(this.#balance * 100) / 100;
  }
  deposit(amount) {
    this.#amountIsCorrect(amount);
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#amountIsCorrect(amount);
    if (amount > this.#balance) {
      throw new Error("Сумма снятия не может превышать текущий баланс");
    }
    this.#balance -= amount;
  }
  #amountIsCorrect(amount) {
    if (!Number.isFinite(amount)) {
      throw new Error("Вы передали не корректное число");
    }
    if (amount <= 0) {
      throw new Error("Сумма не может быть отрицательной или равна 0");
    }
    // if (amount % 0.01 !== 0) {
    //     throw new Error('Дробная часть суммы не может превышать 2 знака');
    // }
    const arr = amount.toString().split(".");
    if (arr[1]?.length > 2) {
      throw new Error("Дробная часть суммы не может превышать 2 знака");
    }
  }
}

const account = new BankAccount();

// console.log(account.getBalance());

// account.deposit(100);

// console.log(account.getBalance());

// account.withdraw("25");

// console.log(account.getBalance());
