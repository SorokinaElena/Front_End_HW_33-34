// Задание 1.
// В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль. Методом max пользоваться нельзя.

// Пример значений переменных:
let a = 32
let b = 5
let c = 14
// Пример результата:
// 32
let max_num_1 = a;
    if(max_num_1 < b) {
        max_num_1 = b2;
    } else if(max_num_1 < c) {
        max_num_1 = c;
    }
console.log(max_num_1);


let max_num = (num_1, num_2, num_3) => {
    max_num = num_1;
    if(max_num < num_2) {
        max_num = num_2;
    } else if(max_num < num_3) {
        max_num = num_3;
    }
    return max_num;
}
console.log(max_num(100, 10, 500));

// Задание 2.

// В программе определены две переменные со строковым значением word_1 и word_2. Напишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины. (свойство length)

// Пример значений переменных:
let word_1 = "машина";
let word_2 = "стол";
// Пример результата:
// "машина"

let word_1_len = word_1.length;
let word_2_len = word_2.length;
if(word_1_len > word_2_len) {
    console.log(word_1);
} else {
    console.log(word_2);
};

// Задание 3.

// В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
// •	если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
// •	если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
// •	в ином случае значение переменной activity должно быть "hiking".

// Пример значений переменных:
let temp = 5;
let weather = "clear";
// Пример результата:
// "golf"
let activity;
    if(temp >= 25 && weather === 'clear') {
        activity = 'golf';
    } else if(temp >= 10 && temp <=24 && weather === 'clear') {
        activity = 'bowling'
    } else {
        activity = 'hiking';
    }
console.log(activity);    
