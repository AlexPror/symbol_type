"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Low Rider",
      artist: "War",
      year: "1974",
    },
    {
      title: "We will rock you",
      artist: "Queen",
      year: "1979",
    },
    {
      title: "Takin' Care of Business",
      artist: "Bachman-Turner Overdrive",
      year: "1974",
    },
  ],
  [Symbol.iterator]() {
    let index = 0;
    const length = this.albums.length;
    return {
      next: () => {
        if (index < length) {
          return {
            value: this.albums[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(album);
}
