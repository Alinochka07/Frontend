"use strict";


// УРОК 28
        // product_title = document.getElementsByClassName("title");
        // console.log(product_title[0].innerText);

        // var product_image = document.getElementById("animal_print");
        // console.log(product_image.src);

        // var product_price = document.getElementById("animal_print_price");
        // console.log(product_price.innerText);

        // var product_old_price = document.getElementsByTagName("del")[0];
        // console.log(product_old_price.innerText);


// УРОК 29

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
        //     alert(attribute[0].innerText);
        // };

        // for (var i = 0; i < add_to_card_elements.length; i++) {
        //     add_to_card_elements[i].addEventListener('click', myFunction, false);
        // }


// УРОК 29 - TASKS 
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

        // const computer = {
        //     name_: "MacBook",
        //     year: 2019,
        //     memory: {
        //         hdd: "500gb",
        //         ram: "4gb"
        //     }
        // };
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


// УРОК 30 - TASKS

        // Сделать функцию которая вычисляет длину окружности, радиус задает пользователь


        // function circleLength(p, r) {
        //     var result = 2 * p * r;
        //     alert(result);
        // }
        // circleLength(3.14, prompt("Введите радиус круга"));


        // // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
        // function min(a,b) {
        //     if(a < b) {
        //         alert(a);
        //     } else if(a > b) {
        //         alert(b);
        //     } else {
        //         alert("Два числа равны друг другу");
        //     }
        // }
        // min(0, 4);



// УРОК 31

        // let num = 200;

        // function thisFunction(num) {
        //     let num2 = 10;
        //     let result;
        //     result = num * num2;
        //     console.log(result);
        // }
        // thisFunction(num); // 2000
        // thisFunction(2); // 20


// УРОК 31 - TASKS 

        // Сделайте функцию которая возводить в степень числа вводимые пользователем
        // const num = prompt('Введите любое число...');
        // function taskFunction(num) {
        //     let result = num ** 2;
        //     let result2 = num ** 3;
        //     alert(`Ваше число в квадрате: ${result}`);
        //     alert(`Ваше цисло в кубе: ${result2}`);
        // }
        // taskFunction(num);


        // Сделайте функцию которая находит площадь круга, радиус вводить пользователь. S = π × r2
        // const p = 3.14;
        // const numb = prompt("Введите радиус круга... ");

        // function circleFunction(numb) {
        //     let s = p * (numb * numb);
        //     alert(`Площадь круга: ${s}`);
        // }
        // circleFunction(numb);


        // Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь.

        // const length = prompt("Введите длину прямоугольника");
        // const width = prompt("Введите ширину прямоугольника");

        // function rectangle(length, width) {
        //     let s = length * width;
        //     alert(`Площадь прямоугольника является: ${s} см`);
        // }
        // rectangle(length, width);


// УРОК 32

        // let sometext = "      Привет! Я ищу эту улицу!";
        // console.log(sometext.length);
        // console.log(sometext.indexOf("Я"));
        // console.log(sometext.lastIndexOf("ищу"));
        
        // var here = sometext.search("ищу");
        // console.log(here);
        // console.log(sometext.slice(0, 7)); // Привет!
        // console.log(sometext.slice(-6, -1)); // улицу
        // console.log(sometext.replace("ищу", "нашел")); // Привет! Я нашел эту улицу!
        // console.log(sometext.toUpperCase()); // ПРИВЕТ! Я ИЩУ ЭТУ УЛИЦУ!
        // console.log(sometext.toLowerCase()); // привет! я ищу эту улицу!
        // console.log(sometext.trim()); // при наличии пробелов в начале или в конце текста, трим будет их удалять... 

        // // Методы и свойства чисел

        // let number = 123;
        // console.log(number.toString()); // превратил число в строку и вывел.

        // let bignumber = 2.567489;
        // console.log(bignumber.toExponential(2)); // 2.57e+0
        // console.log(bignumber.toFixed(0)); // 3
        // console.log(bignumber.toFixed(1)); // 2.6

        // let x = "2.567489";
        // x = Number(x); // из строки переконвертирует в число
        // // x = +x; // делает то же самое, что и Number.
        // console.log(x.toFixed(3)); // здесь уже можем с числом проводить операции как с числом..

        // let a = 10;
        // let b = "7";
        // let result = a + b;
        
        // console.log(result); // 107
        // // let result = a + +b; здесь b превратилось в число. Теперь на консоли будет отображен 17.


// УРОК 32 - TASK 

        // сделайте функцию которая суммирует два числа с плавающей точкой
            // пример: если пользователь  ввел 1.2, 1.2 вывод должен быть 2. 
            // пример: если пользователь  ввел 2.5, 2.3 вывод должен быть 5
            // пример: если пользователь  ввел 2,5, 2.7 вывод должен быть 5. 
            // пример: если пользователь  ввел 2,5, 3,2 вывод должен быть 6.

        //     let number1 = prompt("Введите плавающее число через '.' или ',' ", 1.2);
        //     let number2 = prompt("Введите второе плавающее число через '.' или ',' ", "1,2");


        //     if (number1.includes(",")) {
        //         number1 = number1.replace(",", ".");
        //     } if (number2.includes(",")) {
        //         number2 = number2.replace(",", ".");
        //     } else {
        //         // do nothing
        //     } 

        //     function mySum(number1, number2) {
        //         let result = +number1 + +number2;
        //         alert(`Сумма ваших двух чисел является: ${result.toFixed(0)}`);

        //     }
        //     mySum(number1, number2);


// УРОК 33 - TASKS

        // Сделать callback функцию которая просит ввести логин и пароль, 
        // и проверяет правильно ли введены данные пользователя 

        // const login = prompt("Enter your login");

        // function loginCheck(login, check) {
        //     alert(`Okay, ${login}!`);
        //     check();
        // }
        // loginCheck(login, function() {
        //     if (login === "Admin") {
        //         const password = prompt("Enter your password");
        //             if (password === "qwerty") {
        //                 alert(`Hi, ${login}, welcome!`);
        //             } else {
        //                 alert("Sorry, password is incorrect. Reload the page and try again...");
        //             }
        //     } else {
        //         alert("I guess I do not know you...");
        //     }
        // });

        // Сделать callback функцию которая создаёт html элемент, 
        // то есть функция просит какой тег создать, просит какой текст ввести и цвет текста.

        // let element_text = prompt("Какой текст ввести в элемент рядом с текстом 'Featured?'");
        // let create_p = document.createElement("p");

        // create_p.innerHTML = '<div class="left">\
        //                             <p>'+element_text+'</p>\
        //                         </div>';

        // let entered_text = document.querySelector(".block_title .left");
        // entered_text.appendChild(create_p);
        // alert("Check it out!");


// УРОК 34 

        const array = ["Hi", "this", "is", "Alina"];
                console.log(array); // 'Hi', 'this', 'is', 'Alina' - обычное отображение всех элементов массива

        array.pop();
                console.log(array); // 'Hi', 'this', 'is'  - "pop" извлекает последний элемент из списка массива.

        array.push("Kanat!"); // 5 - добавляет последний элемент и отображает его порядковый номер (не индекс)
                console.log(array); // 'Hi', 'this', 'is', 'welcome!'

        array.shift(); 
                console.log(array); // 'this', 'is', 'welcome!' - "shift" - извлекает первый элемент из списка массива.

        array.unshift("Hello");
                console.log(array);

        // splice //

        const arrayy = [1, 2, 3, 4, 5];
        delete arrayy[0];
        delete arrayy[1];
                console.log(arrayy); // [ <2 empty items>, 3, 4, 5 ]  - удаляет его, но при этом сохраняет его квоту как пустой элемент.
                console.log(arrayy.length); // отображает 5. Удаленные элементы тоже защитывает, но при этом работает с подвохом.

                // Например, если мы добавим в наш массив индекс № 50
                arrayy[10] = 10;
                // И попробуем отобразить его, то он покажет, что существует 51 индексов.
                console.log(arrayy.length); // 11
                console.log(arrayy); // [ <2 empty items>, 3, 4, 5, <5 empty items>, 10 ]

        
        const array2 = ["Welcome", "to", "this", "country!"];

        for (let i = 0; i < array2.length; i++) {
                console.log(array2[i]);
        }
                // Output is:
                        // Welcome
                        // to
                        // this
                        // country!

        for (let i of array2) {
                console.log(i);
        } // тот же результат, но с наименьшей записью

        array2.forEach(function(item, index) { // сначала присваивается любое название самим элементам (н-р: item), потом название индекса (н-р: index)
                console.log(index); // 0 1 2 3
                console.log(item); // Welcome to this country!
        });

        // Псевдомассивы 
        var object = {0: 1, 1: 2, 2: 3, any_index: 3};
        var array3 = [];
        
        // Преобразуем псевдомассив в массив
        for (let i = 0; i < object.any_index; i++) {
                array3.push(object[i]);
        } console.log(array3); // [ 1, 2, 3 ]



// УРОК 34 - TASKS

        // Преобразуйте псевдо массив  в массив
        // дан псевдо массив  {0: 'first', 1: 'second', 2: 'third', length: 3} 
        //            вывод [ "first", "second", "third" ]

        let pseudomassive = {0: 'first', 1: 'second', 2: 'third', length: 3};
        let massive = [];

        for (let i = 0; i < pseudomassive.length; i++) {
                massive.push(pseudomassive[i]);
        } 
        console.log(massive);

        // дан массив ["first", "second", "third" ]
		// вывод [ "f", "i", "r", "s", "t" ], [ "s", "e", "c", "o", "n", "d" ] [ "t", "h", "i", "r", "d" ] 

        let first = String(massive[0]);
        let second = String(massive[1]);
        let third = String(massive[2]);

        let massive2 = [first.split(''), second.split(''), third.split('')];
        console.log(massive2);

        

        






