"use strict";


// УРОК 33 

let add_to_card_elements = document.getElementsByClassName("add_to_card");
        
let shop_elementsFunction = function(event) {
        event.preventDefault();

        var title = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
        var currency = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".currency");
        var price = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".n_price");
        var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".image img");

        let create_li = document.createElement('li');
        create_li.classList.add("bag_item");


        create_li.innerHTML = '<div class="item">\
                                        <div class="row">\
                                                <div class="col-sm-4">\
                                                                <div class="cart_img">\
                                                                        <a href="#"><img src="'+image[0].src+'" class="shopping_cart_img"></a>\
                                                                </div>\
                                                </div>\
                                                <div class="col-sm-8 left-side">\
                                                                <div class="cart_view">\
                                                                        <div><a href="#"><p>'+title[0].innerText+'</p></a></div>\
                                                                        <div class="price">\
                                                                                <span class="currency">'+currency[0].innerText+'</span>\
                                                                                <span class="n_price">'+price[0].innerText+'</span>\
                                                                        </div>\
                                                                        <div class="cart_trash"><a href="#"><i class="far fa-trash-alt"></i></a></div>\
                                                                </div>\
                                                </div>\
                                        </div>\
                                </div>';


        let block_cart = document.querySelector(".cart_submenu .item");
        block_cart.appendChild(create_li);
        alert("This product has been successfully added to your cart!");

           // Вызов функции по удалению товара     
        funct_delete_items_from_cart();
          //  Вызов функции по подсчету общей суммы в корзине
        count_my_cart();

};             

for (var i = 0; i < add_to_card_elements.length; i++) {
        add_to_card_elements[i].addEventListener("click", shop_elementsFunction, false);
}

// УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ

// стрелочная функция должна стоять перед циклом. // а простые функции могут быть прописаны и после цикла//// 

function funct_delete_items_from_cart() {
        let click_to_trash = document.querySelectorAll(".cart_trash");

        for(var i = 0; i < click_to_trash.length; i++) {
                click_to_trash[i].addEventListener("click", del_function, false);
        }

        function del_function(evt) {
                evt.preventDefault();
                this.parentNode.parentNode.parentNode.remove();

                count_my_cart();
        }
}



// // ПОДСЧЕТ ОБЩЕЙ СТОИМОСТИ В КОРЗИНЕ

//let create_p_total_price = document.createElement('p');


function count_my_cart() {
        let count_cart = document.querySelectorAll(".item .n_price");
        let count_my_cart = 0;

        for(let i = 0; i < count_cart.length; i++) {
                count_my_cart = count_my_cart + (+count_cart[i].textContent);
                console.log(count_my_cart);
        }

        //let my_quantity = document.getElementsByClassName("quantity gray")[0] = `${count_my_cart.length}`;
        let my_total_sum = document.getElementsByClassName("total_in_my_cart")[0].innerText = `$ ${count_my_cart}`;
        let total_sum = document.getElementsByClassName("total_in_cart")[0].innerText = `$ ${count_my_cart}`;

        

        // create_p_total_price.innerHTML =  '<div class="total_sum">\
        //                                                 <div class="row">\
        //                                                         <div class="col-sm-6">\
        //                                                                 <p class="light">Total</p>\
        //                                                         </div>\
        //                                                         <div class="col-sm-6 total_in_my_cart">\
        //                                                                 <p class="right">\
        //                                                                         <span>$ </span>\
        //                                                                         <span>'+count_my_cart+'</span></p>\
        //                                                         </div>\
        //                                                 </div>\
        //                                         </div>';

        // let my_cart = document.querySelector(".total_sum");
        // my_cart.appendChild(create_p_total_price);

        
        // let create_p_quantity_sum = document.createElement('p');

        // create_p_quantity_sum = '<p class="total_in_cart">\
        //                                 <span class="quantity">'+count_my_cart.length+' </span>\
        //                                 <span class="gray">/\
        //                                         <span class="total_in_my_cart">$ '+count_my_cart+'</span>\
        //                                 </span>\
        //                         </p>';

        // let my_quantity = document.querySelector(".quantity");
        // my_quantity.appendChild(create_p_quantity_sum);

}

