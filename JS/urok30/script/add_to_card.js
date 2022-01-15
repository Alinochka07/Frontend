// "use strict";


// product_title = document.getElementsByClassName("title");
// console.log(product_title[0].innerText);

// var product_image = document.getElementById("animal_print");
// console.log(product_image.src);

// var product_price = document.getElementById("animal_print_price");
// console.log(product_price.innerText);

// var product_old_price = document.getElementsByTagName("del")[0];
// console.log(product_old_price.innerText);


// Урок 29

// var arr = ["apple", "pear", "melon"];

// arr.forEach(function(item, i, arr) {
//     alert(i + ": " + item + " (Massives are: " + arr + ")" );
// });


// var arrr = [1, -1, 2, -2, "plate", 0];

// var positiveArrr = arrr.filter(function(number) {
//     return number > 0;
// });
// alert(positiveArrr); // 1, 2


// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLength = names.map(function(name_) {
//     return name_.length;
// }); 
// alert(nameLength); // получили массив с длинами. 4, 3, 10.


// EVERY / SOME 
// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//     return number > 0;
// } 
// alert(arr.every(isPositive)); // false - не все положительные
// alert(arr.some(isPositive)); // true - есть хоть одно положительное


// REDUCE
// var arr = [1, 12, 13, 15, 23, 67];
// // для каждого элемента массива запустить функцию
// // ромежуточный результат передавать первым аргументом далее

// var result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0); 
// alert(result); // 131

// var arr = [1, 12, 13, 15, 23, 67];
// для каждого элемента массива запустить функцию
// ромежуточный результат передавать первым аргументом далее


// ****** QUERY SELECTOR ALL ****** --- через него можно обратиться ко всем наследствующим элементам HTML. 


// let title = document.querySelectorAll(".body_product > .title");

// Вариант 1 отображения всех названий наших товаров.
// console.log(title[0].innerText);
// console.log(title[1].innerText);
// console.log(title[2].innerText);
// console.log(title[3].innerText);
// console.log(title[4].innerText);

// Вариант 2 отображения всех названий наших товаров с помощью цикла.

// for (let names of title) {
//     console.log(names.innerText);
// }

// Отобразим название товаров при клике на кнопку.

// var add_to_card_elements = document.getElementsByClassName('add_to_cart');

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll('.title');
//     console.log(attribute[0].innerText);
// };

// for (var i = 0; i < add_to_card_elements.length; i++) {
//     add_to_card_elements[i].addEventListener('click', myFunction, false);
// }

// отображение цены товара при клике на кнопку "shop"
// var nextFunction = function() {
//     var product_price = this.parentNode.parentNode.parentNode.querySelectorAll('.price');
//     console.log(product_price[0].innerText);
// };
// for (var p = 0; p < add_to_card_elements.length; p++) {
//     add_to_card_elements[p].addEventListener('click', nextFunction, false);
// }

// отображение ссылки на картинку товара
// var picFunction = function() {
//     var product_picture = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.picture');
//     console.log(product_picture[0].src);
// };
// for (var x = 0; x < add_to_card_elements.length; x++) {
//     add_to_card_elements[x].addEventListener('click', picFunction, false);
// }

// Изменение названия товара с помощью prompt и отображение только на консоли.

// var old_title = document.getElementsByClassName("title");
// for (let t = 0; t < add_to_card_elements.length; t++) {
//     var titles = [old_title[t].innerText];
//     console.log(titles);
//     }

// function changeTitle() {
//     var new_title = [prompt()];
//     titles = new_title;
//     console.log(titles);
// } 
// for (let i = 0; i < add_to_card_elements.length; i++) {
//     changeTitle();
// }
    
// Изменение цены товара, с отображением в самом HTML

// var price = document.getElementsByClassName("new_price");
// price[0].innerText = "10$";
// price[4].innerText = "85$";

    
// УРОК 30

// ФУНКЦИИ 

// function myFunction() {
//     alert("Hello!");
// }
// myFunction();


// function test(param1, param2, param3) {
//     var num = 13;
//     var result;
//     result = num + param1 + param2 + param3;
//     alert(result);
// }
// test(7, 1, 9);

const computer = {
    name_: "MacBook",
    year: 2019,
    memory: {
        hdd: "500gb",
        ram: "4gb"
    }
};
// console.log(computer);

// delete computer.year;

// console.log(computer);
// console.log(computer["name_"]);
// console.log(computer["memory"]);

// for (let key in computer) {
//     console.log(key);
// }
// name_
// year
// memory

// for (let key in computer) {
//     if(typeof(computer[key]) === "object") {
//         for (let key2 in computer[key]) {
//             console.log(computer[key][key2]);
//         }
//     } else {
//         console.log(computer[key]);
//     }
// }


// TASKS

// Сделать функцию которая вычисляет длину окружности, радиус задает пользователь


function circleLength(p, r) {
    var result = 2 * p * r;
    alert(result);
}
circleLength(3.14, prompt("Введите радиус круга"));


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min(a,b) {
    if(a < b) {
        alert(a);
    } else if(a > b) {
        alert(b);
    } else {
        alert("Два числа равны друг другу");
    }
}
min(0, 4);