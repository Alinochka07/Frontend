(function () {
   // 'use strict';

//     function get_this() {
//         console.log(this);
//     }




//     function get_this(a, b) {
//         // console.log(this);

//         function arifmetika () {
//             return a + b;
//         }
//         console.log(arifmetika());
//     } 


//     get_this(10, 3); 


// this - это возможность вызова объекта и всего содержимого, что находится внутри объекта.
// использование функции внутри функции будет так же обращаться к window
// при включении "use strict" нам выдаст сообщение undefined.


// const bio = {
//     name: "Alina",
//     age: 34,
//     nationanilty: "kyrgyz",
//     obj: function () {
//         console.log(this); // {name: 'Alina', age: 34, nationanilty: 'kyrgyz', obj: ƒ}
//     }

// };
// bio.obj();



// const bio = {
//     name: "Alina",
//     age: 34,
//     nationanilty: "kyrgyz",
//     obj: function () {
//         console.log(this); // {name: 'Alina', age: 34, nationanilty: 'kyrgyz', obj: ƒ}

//         function test() {
//             console.log(this); // при отключении use strict - он уже будет обращаться к глобальному окну window, 
//             // и не будет видеть предыдущие написания в коде с bio.
//             // т.е тут будет undefined.
//         }
//         test();
//     }

// };
// bio.obj();

// function this_user(my_name, age) {
//     this.name = my_name,
//     this.age = age,
//     this.data_ = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let alina = new this_user ("Alina", 34);
// console.log(alina);
// alina.data_();

// this может быть использован внутри функции, которая создает объекты.
// this получит предсозданные объекты и их данные.


// function hello(age) {
//     console.log(this);
//     console.log(this.name);
//     console.log(age);
// }

// const newObj = {
//     name: "Alina"
// };


// hello.call(newObj, 34);
// hello.apply(newObj, ['34']);



// function count(n) {
//     return this + n;
// }
// const mnojitel = count.bind(5); // т.е bind привязывает 5 к this.
// console.log(mnojitel(10)); // 10 здесь присваивается к n.


// }());


// const click = document.querySelector("#blue");

// click.addEventListener("click", function() {
//     // this.style.background = "blue";
//     this.remove();
// });


// УРОК 44 - TASKS

// Сделать объект, который запрашивает имя пользователя, год рождения, место рождения, 
// с этим объектом должны создаваться все пользователи;
// данные о пользователе вывести на страницу 

// input 
// let amantur= new createUser();
// output: 
// Amantur, 1998, Bishkek.

// input 
// let adilet = new createUser();
// output: 
// Adilet, 1995, Tokmok.



function createUser(name, year, city) {
    this.name = name,
    this.year = year,
    this.city = city,
    this.info = function() {
        console.log(`${this.name}, ${this.year}, ${this.city}`);
    };
}

let amantur = new createUser("Amantur", 1998, "Bishkek");
amantur.info();


let adilet = new createUser("Adilet", 1995, "Tokmok");
adilet.info();



}());

