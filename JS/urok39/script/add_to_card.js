"use strict";


// УРОК 33 

        let add_to_card_elements = document.getElementsByClassName("add_to_card");
        
        let shop_elementsFunction = function(event) {
                event.preventDefault();

                var title = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
                var price = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price span");
                var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".image img");

                let create_li = document.createElement('li');
                // create_li.classList.add("bag_item");


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
                                                                                        <span>'+price[0].innerText+'</span>\
                                                                                </div>\
                                                                                <div class="cart_trash"><a href="#"><i class="far fa-trash-alt"></i></a></div>\
                                                                        </div>\
                                                        </div>\
                                                </div>\
                                        </div>';


                let block_cart = document.querySelector(".cart_submenu .item");
                block_cart.appendChild(create_li);
                alert("This product has been successfully added to your cart!");

                // УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ

                let click_to_trash = document.querySelectorAll(".cart_trash");

                // стрелочная функция должна стоять перед циклом.

                let funct_delete_items_from_cart = function(evt) {
                        evt.preventDefault();
                        this.parentNode.parentNode.parentNode.remove();
                };

                for(var i = 0; i < click_to_trash.length; i++) {
                        click_to_trash[i].addEventListener("click", funct_delete_items_from_cart, false);
                }

                // а простые функции могут быть прописаны и после цикла////

                               
        };             

        for (var i = 0; i < add_to_card_elements.length; i++) {
                add_to_card_elements[i].addEventListener("click", shop_elementsFunction, false);
        }
