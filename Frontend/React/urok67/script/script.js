/* eslint-disable indent */
// УРОК REACT

// // пример с использованием объекта и this.

// let object = {
//         number: 5, 
//         sayNumber: function() {
//                 say = () => {
//                         console.log(this);
//                 } 
//                 say();
//         }
// }
// object.sayNumber();

// // фильтр массива по условию если длина меньше 5
// let names = ["Alina", "Kanat", "Umar"];

// let shortNames = names.filter((name) => {
//         return name.length < 5;
// });
// console.log(shortNames);

// // с использованием MAP
// let nameS = ["Alina", "Kanat", "Umar"];

// nameS = nameS.map((name) => name.toUpperCase());
// console.log(nameS);


// ИНТЕРПОЛЯЦИЯ

// function str(text1, text2= "any text") {
//         console.log(`Text 1 is: ${text1} and Text 2 is: ${text2}`);
// }
// str("Alina"); // если дается только один параметр, то text2 берет параметр как - any text. 
//                // А если дадим здесь парамерт, то он будет использовать его.

// REST параметры ...

// function max(...number) {
// 	console.log(number);
// } max(1, 2, 3, 4, 5, 6, 7, 8, 10);

// function maxx(a, b, c, ...number) { // после Rest параметра нельзя прописывать еще параметры.
// 	console.log(a, b, c); // 1, 2, 3
// 	console.log(number); // [4, 5, 6, 7, 8, 9, 10]
// } maxx(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// SPREAD параметр

// const   array1 = [1, 2, 3, 4],
// 	array2 = [10, 20, 30];

// const   result1 = Math.max(300, ...array1, 500, ...array2);
// console.log(result1); // 30 // 500



// const user = {
// 	name: "Alina",
// 	password: "asd1",
// 	role: "admin"
// };

// const admin = {
// 	age: 34, 
// 	username: "myUser"
// };

// // ES-6
// // const result = Object.assign({}, user, admin);
// // console.log(result);

// // ES-8
// const result = {...user, ...admin};
// console.log(result);

// const x = 10;
// const y = 20;

// const Obj = {
//         x: "asd",
//         y: "fgh"
// };
// console.log(Obj); // { x: 'asd', y: 'fgh' }

// const x = 10;
// const y = 20;

// const Obj = {x, y};
// console.log(Obj); // { x: 10, y: 20 }


// Использование методов

// const x = 10;
// const y = 20;

// const Obj = {x, y, 
//         calc() {
// 		console.log(this.x * this.y);
// 	}
// };

// Obj.calc(); // 200
// console.log(Obj); // { x: 10, y: 20, calc: [Function: calc] }


// const user = {
// 	name: "Alina",
// 	password: "asd1",
// 	role: "admin"
// };

// // console.log(user.password);

// const {name, password, role} = user;
// console.log(password); // asd1

// const user = {
// 	names: {
//                 name: "Alina",
//                 surname: "Akylbekova"
//         },
// 	password: "asd1",
// 	role: "admin"
// };

// const {names: {name, surname}, password, role} = user;
// console.log(`${name}, ${surname}, ${password}, ${role}`); // Alina, Akylbekova, asd1, admin



// function connect({host = "localhost", port = 3000, user = "admin"} = {}) {
// 	console.log(`${host}, ${port}, ${user}`);
// }

// // connect({port: 2022});

// connect();

// // function connect(host="localhost", port, user)


// Деструктуризация массива
// const array = [1, 2, 3, 4, 5];
// const [,,,d, e] = array;

// console.log(d, e); // [a, b, c, ...num] => [4, 5];    [,,,d, e] => 4 5



// const array = [[1, 2], 3, 4, [5, "string"]];
// const [[a, b], c, d, [e, f]] = array;

// console.log(a, b, c, d, e, f); // 1 2 3 4 5 string


// Деструктуризация объектов с массивом внутри
const country = {
        name: "Bishkek",
        population: 2000000,
        gender: {
                male: ["15%", "40%"],
                female: ["20%", "80%"]
        }
};

// console.log(country.gender.male[1]); // обычное отображение

// деструктуризация

const {gender: {male: [male1, male2], female:[female1, female2]}} = country;
console.log(male1); // 15%