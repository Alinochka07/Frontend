"use strict";


// УРОК 35

// let x = 5;
// let y = x;

// x = 15;

// console.log(y); // 5 

// let object = {
//         x: 5,
//         y: 10
// };

// const new_object = object;

// new_object.x = 100;

// console.log(new_object); // { x: 100, y: 10 }
// console.log(object); // { x: 100, y: 10 } - здесь даже при изменении данных в копии объекта, значение меняется с исходного объекта, т.к объект был унаследован.

// // Теперь попробуем продублировать так, чтобы при изменении нового значения, старые элементы в объекте оставались неизменными.

// function dublicate_object(thisObject) {

//         const newObject = {};
        
//         for(let key in thisObject) {
//                 newObject[key] = thisObject[key];
//         }
//         return newObject;
// }

// const oldObject = {
//         name: "Anel",
//         age: 4,
//         parents: {
//                 mother: "Zarina",
//                 father: "Kanybek"
//         },
//         sibling: {
//                 type: {
//                         brother: "Umar",
//                         age: 2
//                 }
//         }
// };

// console.log(oldObject);
// // {
// //         name: 'Anel',
// //         age: 4,
// //         parents: { mother: 'Zarina', father: 'Kanybek' },
// //         sibling: { type: { brother: 'Umar', age: 2 } }
// //       }

// newObject = dublicate_object(oldObject);
// console.log(newObject);
// // {
// //         name: 'Anel',
// //         age: 4,
// //         parents: { mother: 'Zarina', father: 'Kanybek' },
// //         sibling: { type: { brother: 'Umar', age: 2 } }
// //       }

// newObject.age = 5;
// console.log(newObject);
// // {
// //         name: 'Anel',
// //         age: 5,
// //         parents: { mother: 'Zarina', father: 'Kanybek' },
// //         sibling: { type: { brother: 'Umar', age: 2 } }
// //       }
        
// newObject.sibling.type.age = 3;
// console.log(newObject);
// // {
// //         name: 'Anel',
// //         age: 5,
// //         parents: { mother: 'Zarina', father: 'Kanybek' },
// //         sibling: { type: { brother: 'Umar', age: 3 } }
// //       }


// console.log(oldObject);
// // {
// //         name: 'Anel',
// //         age: 4,
// //         parents: { mother: 'Zarina', father: 'Kanybek' },
// //         sibling: { type: { brother: 'Umar', age: 3 } }
// //       }


// // Другая опция дублировать объекты, с наименьшим кодом.
// const newAssign = Object.assign({}, oldObject);
// newAssign.age = 6;
// newAssign.sibling.type.age = 4;
// console.log(newAssign);
// console.log(oldObject);

// const massive = ["apple", "pear", "grapes"];

// const new_massive = massive;
// new_massive[0] = "orange";

// console.log(new_massive); // [ 'orange', 'pear', 'grapes' ]
// console.log(massive); // [ 'orange', 'pear', 'grapes' ]

// const independent_massive = massive.slice();
// independent_massive[0] = "melon";

// console.log(independent_massive); // [ 'melon', 'pear', 'grapes' ]
// console.log(massive); // [ 'orange', 'pear', 'grapes' ]


// const technology = ["computer", "printer", "tablet"],
//         appliance = ["TV", "refrigerator", "washing machine"],
//         combo = [...technology, ...appliance, "air conditioner"];  // метод Spread 

// console.log(combo);
// [
//         'computer',
//         'printer',
//         'tablet',
//         'TV',
//         'refrigerator',
//         'washing machine',
//         'air conditioner'
//       ]

// const new_technology = [...technology];
// new_technology[0] = "Smartphone";

// console.log(new_technology); // [ 'Smartphone', 'printer', 'tablet' ]
// console.log(technology); // [ 'computer', 'printer', 'tablet' ]

// const obj = {
//         a: 1,
//         b: 2
// };

// const new_obj = {...obj};
// new_obj.a = 13;
// console.log(new_obj); // { a: 13, b: 2 }
// console.log(obj); // { a: 1, b: 2 }


// УРОК 35 - TASK
// Сделайте функцию которая принимает информацию о пользователе, 
//  - Функция принимает три аргумента 
//    1. Первый параметр для имени 
//    2. Второй для Фамилии 
//    3. третий для дополнительной информации о пользователе 
// если пользователь ввел все правильно, то на консоли выводится имя, фамилия, и 4 доп данных о пользователе. 
// например:
// input: getPersonInfo('Brad', 'Pit', 'option1', 'option2', 'option3', 'option4')
// output: Brad Pit option1,option2,option3,option4 

// input: getPersonInfo('Brad', 'Pit', 'option1', 'option2', 'option3', 'option4', 'option5')
// output: Brad Pit option1,option2,option3,option4 функция принимает только 4 опции


let name = prompt("Enter the name");
let surname = prompt("Enter the surname");
let age = prompt("Enter the age");
// occupation: prompt("Enter the occupation")

const myPerson = {
        name: "Brad",
        surname: "Pitt",
        age: 58,
        occupation: "actor",
        movies: {
                2005: "Mr. & Mrs. Smith",
                2008: "Benjamin Button",
                2022: "Bullet Train"
        },
        nationality: "American"
};

function getPersonalInfo(name, surname, age) {
        if (name === myPerson[name] && surname === myPerson[surname] && age === myPerson[age]) {
                console.log(myPerson);
        } 
}
getPersonalInfo();


