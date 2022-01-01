// Calculator //
// 1 //

function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('output').innerHTML = result;
}
function minus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('output').innerHTML = result;
}
function times() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('output').innerHTML = result;
}

function division() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    if (num2 == 0) {
        result = 0;
    }
    document.getElementById('output').innerHTML = result;
}

function eucl() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 % num2;
    if (num2 == 0) {
        result = 0;
    }
    document.getElementById('output').innerHTML = result;
}

function exponen() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 ** num2;
    document.getElementById('output').innerHTML = result;
}

// 2 //

var login = prompt('Введите пароль');
var password = prompt('Введите пароль');

var log = 'Alina';
var passw = 1234567;

if (login == log && password == passw) {
    console.log('Вы успешно вошли в аккаунт!');
}
else if (login != log && password == passw) {
    console.log('Логин неверный');
}   
else if (password != passw && login == log) {
    console.log('Пароль неверный');
}  
else {
    console.log('Try again');
}

