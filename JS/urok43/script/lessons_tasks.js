"use strict";


// УРОК 43 

// console.log(document.head);
// console.log(document.body);
// document.body.style.background = "#E9FEFE";

// for (let per of document.body.childNodes) {
//     if(per.nodeName == "#text") {
//         continue;
//     }
//     console.log(per.nodeName);
// } 

// УРОК 43 - TASKS
// сделать навигацию для смены цвета заднего фона 
// навигация должнa содержать три цвета
// при нажатии на цвет в навигации задний цвет фона должен поменяться

var main_color = document.querySelector(".test-main");
let color_text = document.getElementById("color_text");

let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let red = document.querySelector("#red");
let orange = document.querySelector("#orange");

blue.addEventListener("click", () => {
    main_color.style.background = "#007bff";
    color_text.innerHTML = "blue";
});

green.addEventListener("click", () => {
    main_color.style.background = "#28a745";
    color_text.innerHTML = "green";
});

red.addEventListener("click", () => {
    main_color.style.background = "#dc3545";
    color_text.innerHTML = "red";
});

orange.addEventListener("click", () => {
    main_color.style.background = "#ffc107";
    color_text.innerHTML = "orange";
});

