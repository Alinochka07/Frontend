"use strict";


// УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ

// стрелочная функция должна стоять перед циклом. // а простые функции могут быть прописаны и после цикла//// 

function funct_delete_items_from_cart(calculate_cart, count_items_in_cart) {
    let click_to_trash = document.querySelectorAll(".cart_trash");

    for(var i = 0; i < click_to_trash.length; i++) {
            click_to_trash[i].addEventListener("click", del_function, false);
    }

    function del_function(evt) {
            evt.preventDefault();
            this.parentNode.parentNode.parentNode.parentNode.remove();

            calculate_cart();
            count_items_in_cart();
    }
};

module.exports = funct_delete_items_from_cart;
