"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
"use strict";

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Manager {
  constructor() {
    this.chefs = new Map([
      ["Пицца", "Олег"],
      ["Суши", "Андрей"],
      ["Десерт", "Анна"],
    ]);

    this.menu = new Set([
      'Пицца "Маргарита"',
      'Пицца "Пепперони"',
      'Пицца "Три сыра"',
      'Суши "Филадельфия"',
      'Суши "Калифорния"',
      'Суши "Чизмаки"',
      'Суши "Сеякемаки"',
      'Десерт "Тирамису"',
      'Десерт "Чизкейк"',
    ]);

    this.orders = new Map();
  }

  newOrder(client, ...items) {
    const orderDetails = [];
    items.forEach((item) => {
      if (this.menu.has(`${item.type} "${item.name}"`)) {
        orderDetails.push(
          `${item.type} "${item.name}" - ${
            item.quantity
          }; готовит повар ${this.chefs.get(item.type)}`
        );
      } else {
        throw new Error(`Десерт "${item.name}" - такого блюда не существует`);
      }
    });

    this.orders.set(client, orderDetails);
    this.printOrder(client);
  }

  printOrder(client) {
    const orderDetails = this.orders.get(client);
    if (orderDetails) {
      console.log(`Клиент ${client.firstname} заказал:`);
      orderDetails.forEach((detail) => {
        console.log(detail);
      });
    }
  }
}

const manager = new Manager();

manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
ы;
