"use strict";


// УРОК 38 - TASK

// написать функцию которая запрашивает пользователю ввести число, 
// функция должна проверять что ввел пользователь строку или тип число, 
// при этом не конвертируя данные который ввел пользователь. 
// если пользователь ввел тип чисто то преобразуйте это в шестнадцатеричный код, 
// восьмеричный и двоичный код, если это не строка то на консоли выводится что это не строка.

// input: 13
// output: d, 15, 1101

let n = prompt("Введите число", "");

function isNumber() {
        let n2 = parseInt(n);
        if(!isNaN(n2)) {
                console.log("it is a number");
        }else {
                console.log("not number");
        }
}
isNumber(n);

n = +n;
console.log(n.toString(16)); // d
console.log(n.toString(8)); // 15
console.log(n.toString(2)); // 1101