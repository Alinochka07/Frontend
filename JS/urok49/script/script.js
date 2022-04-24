// "use strict";

// using strict mode for operating data


// let = 
// var = 
// const = неизменяемая переменная

        // Numbers, strings and their values...
        // let number = 1;
        // let text = 'Text';
        // console.log(number + text);
        // console.log(number * text); // NaN - that string and integer cannot be concatenated. 

        // let name_ = "Иван";
        // // Вставим переменную
        // alert( `Привет, ${name_}!` ); // Привет, Иван!

        // // Вставим выражение
        // alert( `результат: ${1 + 2}` ); // результат: 3



// BOOLEAN //
            // // Boolean values...
            // var number2 = true;
            // var text2 = false;
            // // console.log(number2, text2);


// OBJECTS //
            // // Objects are written using curly brackets {} 
            // let object = {
            //     name: 'JavaScript',
            //     year: 1990,
            //     founder: 'Brendan Eich'
            // };
            // console.log(object.name, object.founder);
            // console.log(object['name']);

// MASSIVES //     
            // // Massives are written using square brackets []
            // let massive = ['apple', 'sauce', 'bracelet'];
            // console.log(massive[0]);
            // console.log(massive[2]);

// alert('Hello, world!'); // modal window, systematic, the design of which is not possible to change.

// PROMPT //
            // var years = prompt('How old are you?');
            // alert(`You are ${years}!`);


            // var years2 = prompt('Enter your year of birth...');
            // var currentDate = new Date()
            // var age2 = currentDate.getFullYear() - years2;
            // alert(`You are ${age2} years old... `); 

// IF, ELSE, CONFIRM //
            // var msg;
            // if(age2 == 34) {
            //     msg = 'You are a wife';
            // } else {
            //     msg = 'You are a husband';
            // }
            // alert(msg);

            // confirm('If you accept cookies of this web, click "OK"');



// TYPEOF // 

            // let value = true;
            // alert(typeof value); // boolean

            // value = String(value); // теперь value это строка "true"
            // alert(typeof value); // string

            // let someVariable = 1234;
            // console.log(typeof someVariable); // number


// ЧИСЛЕННОЕ ПРЕОБРАЗОВАНИЕ 
            // console.log("5" - "3"); // 2  
            // console.log(5-3); // 2

            // let str = "123"
            // let num = Number(str); // становится числом 123

            // console.log(typeof num); // number
            // console.log( Number("   123   ") ); // 123
            // console.log( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
            // console.log( Number(true) );        // 1
            // console.log( Number(false) );       // 0


// ЛОГИЧЕСКОЕ ПРЕОБРАЗОВАНИЕ // 
            // console.log( Boolean(1) ); // true
            // console.log( Boolean(0) ); // false

            // console.log( Boolean("Привет!") ); // true
            // console.log( Boolean("") ); // false


// БАЗОВЫЕ ОПЕРАТОРЫ: унарный, бинарный и операнд //
            // let x = 1; // операнд
            // let y = 3; // операнд
            // let summ = x + y;  // математический оператор

            // x = -x; // унарный
            // console.log( x ); // -1, применили унарный минус

            // let x = 1, y = 3;
            // alert( y - x ); // 2, бинарный минус вычитает значения

                            // Сложение +
                            // Вычитание -
                            // Умножение *
                            // Деление /
                            // Взятие остатка от деления %
                            // Возведение в степень **


// СЛОЖЕНИЕ СТРОК //
            // let s = "моя" + "строка";
            // console.log(s); // моястрока

            // // при сложении, второе значение строки не преобразовывается в число. Преобразование происходит только в остальных мат.операциях кроме сложении.
            // console.log( '1' + 2 ); // "12"
            // console.log( 2 + '1' ); // "21"
            // console.log(2 + 2 + '1' ); // будет "41", а не "221"

            // console.log( 6 - '2' ); // 4, '2' приводится к числу
            // console.log( '6' / '2' ); // 3, оба операнда приводятся к числам

            // let x = 1;
            // alert( +x ); // 1

            // let x = 1;
            // console.log(-x); // -1

            // let x = -1;
            // console.log(+x); // -1

            // let x = false;
            // console.log(+x); // 0

            // let apples = "2";
            // let oranges = "3";
            // // оба операнда предварительно преобразованы в числа
            // alert( +apples + +oranges ); // 5

            // // более длинный вариант
            // // alert( Number(apples) + Number(oranges) ); // 5

            // let x = 2 * 2 + 1;
            // alert( x ); // 5

// Присваивание = возвращает значение

            // let a = 1;
            // let b = 2;
            // let c = 3 - (a = b + 1);
            // alert( a ); // 3
            // alert( c ); // 0

// Присваивание по цепочке

            // let a, b, c;  
            // a = b = c = 2 + 2;
            // alert( a ); // 4
            // alert( b ); // 4
            // alert( c ); // 4

            // ==

            // c = 2 + 2;
            // b = c;
            // a = c;

// СОКРАЩЕННАЯ АРИФМЕТИКА С ПРИСВАИВАНИЕМ
            // let n = 2;
            // n += 5; // теперь n = 7 (работает как n = n + 5)
            // n *= 2; // теперь n = 14 (работает как n = n * 2)

            // alert( n ); // 14






// ИНКРЕМЕНТ / ДЕКРЕМЕНТ
            // Инкремент ++ увеличивает переменную на 1:

            // let counter = 2;
            // counter++;        // работает как counter = counter + 1, просто запись короче
            // ++counter можно ставить не только после оператора, но и до него.
            // alert( counter ); // 3

            // Декремент -- уменьшает переменную на 1:

            // let counter = 2;
            // counter--;        // работает как counter = counter - 1, просто запись короче
            // alert( counter ); // 1

            // ****** Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке.



// ПОБИТОВЫЕ ОПЕРАТОРЫ
                // AND(и) ( & )
                // OR(или) ( | )
                // XOR(побитовое исключающее или) ( ^ )
                // NOT(не) ( ~ )
                // LEFT SHIFT(левый сдвиг) ( << )
                // RIGHT SHIFT(правый сдвиг) ( >> )
                // ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

// Оператор запятая = то же самое, что +   но имеет низкий приоритет;
                // let a = (1 + 2, 3 + 4);
                // alert( a ); // 7 (результат вычисления 3 + 4)


// СРАВНЕНИЕ СТРОК   - JS использует алфавитный порядок с конца, для определения сравнения
                // alert( 'Я' > 'А' ); // true
                // alert( 'Коты' > 'Кода' ); // true
                // alert( 'Сонный' > 'Сон' ); // true


// СРАВНЕНИЕ РАЗНЫХ ТИПОВ
                // alert( '2' > 1 ); // true, строка '2' становится числом 2
                // alert( '01' == 1 ); // true, строка '01' становится числом 1

                // alert( true == 1 ); // true
                // alert( false == 0 ); // true

                // alert( null > 0 );  // (1) false
                // alert( null == 0 ); // (2) false
                // alert( null >= 0 ); // (3) true

// УСЛОВНЫЙ ОПЕРАТОР 
                // let accessAllowed;
                // let age = prompt('Сколько вам лет?', '');

                // if (age > 18) {
                // accessAllowed = true;
                // } else {
                // accessAllowed = false;
                // }

                // alert(accessAllowed);


// ТЕРНАРНЫЙ ОПЕРАТОР "?"
            // let result = условие ? значение1 : значение2;

            // let accessAllowed = (age > 18) ? true : false;

            // // оператор сравнения "age > 18" выполняется первым в любом случае
            // // (нет необходимости заключать его в скобки)
            // let accessAllowed = age > 18 ? true : false;


// НЕСКОЛЬКО ОПЕРАТОРОВ "?"

            // let age = prompt('Возраст?', 18);

            // let message = (age < 3) ? 'Здравствуй, малыш!' :
            // (age < 18) ? 'Привет!' :
            // (age < 100) ? 'Здравствуйте!' :
            // 'Какой необычный возраст!';

            // alert( message );

            // // Выше код сокращен, но выполняет то же самое, что и ниже код с использованием else if...

            // if (age < 3) {
            //     message = 'Здравствуй, малыш!';
            //   } else if (age < 18) {
            //     message = 'Привет!';
            //   } else if (age < 100) {
            //     message = 'Здравствуйте!';
            //   } else {
            //     message = 'Какой необычный возраст!';
            //  }


// НЕТРАДИЦИОННОЕ ИСПОЛЬЗОВАНИЕ "?"

                // let company = prompt('Какая компания создала JavaScript?', '');

                // (company == 'Netscape') ?
                // alert('Верно!') : alert('Неправильно.');

                // // Выше код не рекомендуется писать, из-за менее читабельности. Он выполняет то же что и:

                // let company = prompt('Какая компания создала JavaScript?', '');

                // if (company == 'Netscape') {
                //     alert('Верно!');
                //     } else {
                //     alert('Неправильно.');
                // }

                // TASK 1

                // let official_name = prompt("Какое «официальное» название JavaScript?");
                // (official_name == 'ECMAScript') ?
                // alert('Верно!') : 
                // alert('Не знаете? ECMAScript!');

                // TASK 2

                // let anyNumber = prompt('Введите любое число!');

                // if (anyNumber > 0) {
                //     alert(1);
                // } else if (anyNumber < 0) {
                //     alert(-1);
                // } else {
                //     alert(0);
                // }

                // TASK 3

                // let result = (a + b < 4) ? 'Мало' : 'Много';

                // let login = prompt('Введите логин');

                // let message = (login == 'Сотрудник') ? 'Привет' :
                //     (login == 'Директор') ? 'Здравствуйте' :
                //     (login == '') ? 'Нет логина' : 
                //     '';

                // let message;
                // let login = prompt('Введите логин');

                // if (login == 'Сотрудник') {
                //   message = 'Привет';
                // } else if (login == 'Директор') {
                //   message = 'Здравствуйте';
                // } else if (login == '') {
                //   message = 'Нет логина';
                // } else {
                //   message = '';
                // }
                

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 

// В JavaScript есть три логических оператора: || (ИЛИ),        &&      (И) и        ! (НЕ).
// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.

                        // || ИЛИ //
                        // alert( true || true );   // true
                        // alert( false || true );  // true
                        // alert( true || false );  // true
                        // alert( false || false ); // false

                        // && И //
                        // alert( true && true );   // true
                        // alert( false && true );  // false
                        // alert( true && false );  // false
                        // alert( false && false ); // false

                        // ! НЕ //
                        // alert( !true ); // false
                        // alert( !0 ); // true


                    // let result; 
                    // result = 0 || 1 || 2;
                    // alert(result);

                    // alert( 1 || 0 ); // 1
                    // alert( true || 'no matter what' ); // true

                    // alert( null || 1 ); // 1 (первое истинное значение)
                    // alert( null || 0 || 1 ); // 1 (первое истинное значение)
                    // alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

                    // Если первый операнд истинный,
                    // И возвращает второй:
                    // alert( 1 && 0 ); // 0
                    // alert( 1 && 5 ); // 5

                    // Если первый операнд ложный,
                    // И возвращает его. Второй операнд игнорируется
                    // alert( null && 5 ); // null
                    // alert( 0 && "no matter what" ); // 0

                    // let x = 1;
                    // (x > 0) && alert( 'Greater than zero!' ); // Greater than zero!

                    // TASK 1
                    // if (!(age >= 14 && age <= 90));

                    // TASK 2
                    // let login = prompt("Login");
                    // if (login == "Admin") {
                    //     password = prompt("Password"); {
                    //         if (password == "Я главный") {
                    //             alert("Здравствуйте");
                    //         } else if (password == "" || password == null) {
                    //             alert("Canceled");
                    //         } else {
                    //             alert("Неверный пароль!");
                    //         }
                    //     }
                    // } else if (login == "" || login == null) {
                    //     alert("Canceled");
                    // } else {
                    //     alert("Я вас не знаю!");
                    // } 

                            
// ОПЕРАТОР ОБЪЕДИНЕНИЯ С NULL '??' 

// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

                            // let height = 0;

                            // alert(height || 100); // 100
                            // alert(height ?? 100); // 0

                    // result = (a !== null && a !== undefined) ? a : b;

                    // let user;
                    // alert(user ?? "Аноним"); // Аноним. Because user is undefined.


                    // let user = "Иван";
                    // alert(user ?? "Аноним"); // Иван. Because user is defined, and it shows it. 

                    // let user = "Ivan"; 
                    // (user == "Ivan") ?
                    // alert(user) :
                    // alert("Nothing!");

                    // let x = 1 && 2 ?? 3; // Синтаксическая ошибка


// ЦИКЛЫ WHILE  ///

                    // let i = 0;
                    // while (i < 3) { // выводит 0, затем 1, затем 2
                    // alert( i );
                    // i++; // если бы его не было, то цикл не увеличивался и повторялся бы бесконечно, показывая только "0"
                    // }

                    // let i = 3;
                    // while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
                    // alert( i );
                    // i--;
                    // }

                    // let i = 3;
                    // while (i) alert(i--);

// ЦИКЛ DO .. WHILE //

                    // let i = 0;
                    // do {
                    //   alert( i );
                    //   i++;
                    // } while (i < 3);


// ЦИКЛ FOR... //

// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }

                    // for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
                    //     alert(i);
                    //   }

// ЦИКЛ WHILE... //

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
// здесь окно prompt будет выходить до тех пор, пока пользователь не отменит его. В конце программа просуммирует числа, которые ввел пользователь до отмены.



// while (true) {
//         let pass = prompt("Введите пароль", "");
//         if (pass === "123") {
//                 break;
//         }
// } alert("hi");

// let hamster = {
//         stomach: [],
      
//         eat(food) {
//                 // this.stomach.push(food);
//                 this.stomach = [food];
//         }
//       };
      
//       let speedy = {
//         __proto__: hamster
//       };
      
//       let lazy = {
//         __proto__: hamster
//       };
      
//       // Этот хомяк нашёл еду
//       speedy.eat("apple");
//       console.log( speedy.stomach ); // apple
      
//       // У этого хомяка тоже есть еда. Почему? Исправьте
//       console.log( lazy.stomach ); // apple -- // ничего

// for (let i = 0; i < 10; i++) {

//         // если true, пропустить оставшуюся часть тела цикла
//         if (i % 2 == 0) continue;
      
//         alert(i); // 1, затем 3, 5, 7, 9
//       }

// outer: for (let i = 0; i < 3; i++) {

//         for (let j = 0; j < 3; j++) {
      
//           let input = prompt(`Значение на координатах (${i},${j})`, '');
      
//           // если пустая строка или Отмена, то выйти из обоих циклов
//           if (!input) break outer; // (*)
      
//           // сделать что-нибудь со значениями...
//         }
//       }
      
//       alert('Готово!');


// outer: for(let i = 0; i< 5; i++) {
//         let input = prompt(`Enter any number ${i}`);
//         alert(input*i);
//         if (!input) break outer;

// }
// alert("Hello!");




// let i = 3;

// while (i) {
//   alert( i-- );
// }    // ответ будет 1. так как цикл при сравнении с 0 дальше не может проверяться, поэтому просто выведит значение 1.



// Префиксный и постфиксный варианты в цикле "while"

// let i = 0;
// while (++i < 5) alert( i );    // Префиксный вариант не может сочесть 5 < 5 правильным, поэтому последний его результат будет 4.

// let i = 0;
// while (i++ < 5) alert(i); // В постфиксном варианте он будет счесть правильным при проверке 5 < 5, поэтому выведет последним 5.



// Префиксный и постфиксный варианты в цикле "for"
// for (let i = 0; i < 5; i++) alert( i ); // последним выведет 4
// for (let i = 0; i < 5; ++i) alert( i ); // последним выведет 4. В цикле for что префиксный, что постфиксный не будет иметь значение.


// Task 1

// for(let i = 2; i <= 10; i++) {
//         if(i % 2 == 0) {
//                 alert(i);
//         }
// }

// Task 2

// for (let i = 0; i < 3; i++) {
//         alert( `number ${i}!` );
//       }


// let i = 0;
// while (i < 3) {
//         alert(`number ${i++}!`);
// }

// Task 3
// option 1
// let input = 0;

// while (input < 100) {
//         input = Number(prompt("Enter a number more than 100"));
//         if (input > 100 || !input) {
//                 break;
//         }
// }
// option 2
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);




// Для n = 10 результат должен быть 2,3,5,7. N должен делиться только на 1.
// let n = 10;

// nextt:
// for (let i = 2; i <= n; i++) {
//         for (let j = 2; j < i; j++) {
//                 if (i % j == 0) continue nextt;
//         }
//         alert(i);
// } // 2, 3, 5, 7


// for (let i = 2; i <= 10; i++) {
//         if(i % 2 == 0) continue;
//         alert(i);
//         }
//         // 3, 5, 7, 9







// УРОК 42

// // Option 1 - to display alert via click using a function with "onclick"
// let click = document.getElementById("btn1");
// click.onclick = function () {
//         alert("Hello!");
// };

// click.onclick = function () {
//         alert("Hello 2!");      // here works only second alert because this function gets only last operation.
// };
      
// // Option 2 - via "addEventListener". The result will be same.

// click.addEventListener("click", () => {
//         alert("Hello from Click!");
// });

// // click.addEventListener("click", () => {
// //         alert("Hello 4!");               // here it displays both alerts, and it works by clicking only once.
// // });    

// let mouseover = document.getElementById("btn2");

// mouseover.addEventListener("mouseover", () => {
//         alert("You just mouseovered me!");
// });

// let mouseout = document.getElementById("btn3");
// mouseout.addEventListener("mouseout", () => {
//         alert("Yess! A mouseout worked!");
// });

// // option 1 to delete a button

// let delete_button = document.getElementById("btn4");

// // delete_button.addEventListener("click", (event) => {
// //         event.target.remove();
// // });

// // option 2 to delete a button

// let delete_element = (e) => {e.target.remove()};

// delete_button.addEventListener("click", delete_element);



// // Get the text of button

// let get_text = document.getElementById("btn5");
// let got_text = (e) => {
//         alert(`You just clicked '${e.target.innerText}' button`);
// };

// get_text.addEventListener("click", got_text);


let ms = 0.000001;
let s_ms = 1e-6;                   // 1e6 - это максимум значение которое может быть
console.log(s_ms); // 0.000001

let ssms = 64.6e-2;
console.log(ssms); // 0.646

let n = 3.10;
console.log(Math.floor(n)); // 3  - rounding down.
console.log(Math.ceil(n));   // 4  - rounding up. 
console.log(Math.round(n)); // 3 - rounds by the last value. e.g. 3.10 - 1 is less than 5. 
console.log(Math.round(3.65));  // 4.
console.log(Math.trunc(n)); // 3   Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1

let ts = 1e-5;
console.log(ts);

let ps = 1.34e-3;
console.log(ps);   // 0.00134

let number = 0.1 + 0.2;


number = number.toFixed(1);
console.log(number);

console.log((0.1 + 0.2).toFixed(1) == 0.3); // true

console.log(0.1 + 0.2 == 0.3); // false   Потому что 0.1 + 0.2 = 0.30000000000000004


console.log(9999999999999999); // 15 девяток это предел. если будет 16 и больше, то покажет 10000000000000000 и больше.


console.log(Object.is(2, 5)); // false   => 2 === 5 - false
console.log(Object.is(5, 5)); // true  =>  5 === 5 - true
console.log(Object.is(2, 2.1)); // false

console.log(parseInt("19$")); // 19
console.log(parseFloat("19$")); // 19

console.log(parseInt("19.00$")); // 19
console.log(parseFloat("19.00$")); // 19

console.log(parseInt("$19")); // NaN
console.log(parseFloat("$19")); // NaN

console.log(Math.fround(2.6)); // 2.5999999046325684
console.log(Math.abs(2.6)); // 2.6
console.log(Math.atan(2)); // 1.1071487177940904
console.log(Math.hypot(2.57097654));
console.log(Math.pow(2, 3)); // 8