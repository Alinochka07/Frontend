// "use strict";


// УРОК 33 

        let add_to_card_elements = document.getElementsByClassName("add_to_card");
        
        let shop_elementsFunction = function(event) {
                event.preventDefault();

                var title = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
                var price = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price span");
                var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".image img");

                let create_li = document.createElement('li');

                console.log();
                console.log();
                console.log();

                create_li.innerHTML = '<div class="item">\
                                                <div class="row">\
                                                        <div class="col-sm-4">\
                                                                <div class="left">\
                                                                <img src="'+image[0].src+'" alt="" class="shopping_cart_img">\
                                                                </div>\
                                                        </div>\
                                                        <div class="col-sm-8">\
                                                                <div class="cart_view">\
                                                                        <p>'+title[0].innerText+'</p>\
                                                                        <div class="price">\
                                                                                <span>'+price[0].innerText+'</span>\
                                                                        </div>\
                                                                        <div class="cart_trash"><i class="far fa-trash-alt"></i></div>\
                                                                </div>\
                                                        </div>\
                                                </div>\
                                        </div>';

                let block_cart = document.querySelector(".cart_submenu .item");
                block_cart.appendChild(create_li);
                alert("This product successfully added to your cart!");
                               
        };


        for (var i = 0; i < add_to_card_elements.length; i++) {
                add_to_card_elements[i].addEventListener("click", shop_elementsFunction, false);
        }


