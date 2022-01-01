// "use strict";

// using strict mode for operating data


// Numbers, strings and their values...
// let number = 1;
// let text = 'Text';
// console.log(number + text);
// console.log(number * text); // NaN - that string and integer cannot be concatenated. 


// Boolean values...
// var number2 = true;
// var text2 = false;
// console.log(number2, text2);

// Objects are written using curly brackets {} 
// let object = {
//     name: 'JavaScript',
//     year: 1990,
//     founder: 'Brendan Eich'
// };
// console.log(object.name, object.founder);
// console.log(object['name']);

// Massives are written using square brackets []
// let massive = ['apple', 'sauce', 'bracelet'];
// console.log(massive[0]);
// console.log(massive[2]);

// alert('Hello, world!'); // modal window, systematic, the design of which is not possible to change.

// prompt
// var years = prompt('How old are you?');
// alert('You are ' + years + 'years old...');


// var years2 = prompt('Enter your year of birth...');
// var age2 = 2021 - years2;
// alert('You are ' + age2 + ' years old!'); 


// var msg;
// if(age2 == 33) {
//     msg = 'You are a wife';
// } else {
//     msg = 'You are a husband';
// }
// alert(msg);

// confirm('If you accept cookies of this web, click "OK"');

// Lesson 26 //
// alert(2 == 2); // true
// alert(2 > 4); // false
// alert(2 < 4); // true
// alert(2 >= 4); // false
// alert(2 <= 4); // true
// alert(2 != 4); // true

alert('2' == 2); // true - it compares values.
alert('2' === 2); // false - it compares type of data + values. Strong comparison!


if (2 == 2) {
    alert('True');
} else {
    alert('Not true');
}