(function() {
    "use strict";


    // // filter
    // const array = ["Apple", "Pear", "Mango", "Tangerine", "Quince"];
    // const result = array.filter(name => name.length < 7);

    // console.log(result);

    // // map

    // const array2 = ["Apple", "PEAR", "MangO", "TAngerine", "Quince"];
    // const result2 = array2.map(item => item.toUpperCase());

    // console.log(result2);

    // // every & some

    // const array3 = ["Apple", "PEAR", "this", "TAngerine", "Quince", 7];
    // const result3 = array3.some(items => typeof(items) === "string");
    // const result4 = array3.every(items => typeof(items) === "string");

    // console.log(result3); // true
    // console.log(result4); // false

    // // reduce

    // const numbers = [1, 3, '5', 7, 9];
    // const res = numbers.reduce((count, num) => count + num, 'This is');

    // console.log(res); // 25, This is13579

    // // Использование нескольких методов для выведения одного элемента из объекта

    // const obj = {
    //     snickers: "productname",
    //     food: "type",
    //     bars: "kind"
    // };

    // const myResult = Object.entries(obj)
    // .filter(product => product[1] === "productname")
    // .map(product => product[0]);


    // console.log(myResult);
    
    // const arrrr = [3, "fkfkg", 8, "ghslf"];
    // console.log(arrrr.join('\n'));


    // HOMEWORK
    
    // 1
    const names = 'alex, denis, victory';

    var result = names.split(',').map(String);
    console.log(result); // [ 'alex', ' denis', ' victory' ]

    // 2

    const number = '1, 2, 3';

    let myResult = number.match(/\d+/g).map(Number).reduce((count, num) => count + num);
    console.log(myResult); // 6
    

    


    
        








}());