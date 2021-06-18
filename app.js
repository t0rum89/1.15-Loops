// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let str = "i am in the easycode";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === " " || i === 0) {
    newStr += str[i].toUpperCase();
  } else {
    newStr += str[i];
  }
}

console.log(newStr);

// let str = "i am in the easycode";
// let newStr = "";
// let i =  0;

// while (i < str.length) {
//   if (str[i - 1] === " " || i == 0) {
//     newStr += str[i].toUpperCase();
//     continue;
//   }
//   i++;
//   newStr += str[i];
// }

// console.log(newStr);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str = "tseb eht ma i";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(newStr);
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let n = prompt("Введите число");
let f = 1;

for (i = n; i > 1; i--) {
  f *= i;
}
console.log(f);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = "JavaScript is a pretty good language";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === " ") {
    newStr += str[i].toUpperCase();
  } else if (str[i] === " ") {
    continue;
  } else {
    newStr += str[i];
  }
}

console.log(newStr);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let item of arr) {
  if (item % 2 !== 0) {
    console.log(item);
  }
}

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: "denis",
  work: "easycode",
  age: 29,
};
for (let i in list) {
  if (typeof list[i] === "string") {
    list[i] = list[i].toUpperCase();
  }
}
console.log(list);

const a = 1;
