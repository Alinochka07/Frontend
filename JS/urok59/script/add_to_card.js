"use strict";

// Добавление товара в корзину

function myFunction(img, ttl, curr, prc) {
        let image = img;
        let title = ttl;
        let currency = curr;
        let price = prc;
        

        let create_li = document.createElement('li');
        create_li.classList.add("bag_item");


        create_li.innerHTML = '<div class="row">\
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
                                </div>';


        let block_cart = document.querySelector(".cart_submenu .item .bag_items");
        block_cart.appendChild(create_li);
        alert("This product has been successfully added to your cart!");

           // Вызов функции по удалению товара     
        funct_delete_items_from_cart();
          //  Вызов функции по подсчету общей суммы в корзине
        count_my_cart();
        // Подсчет количества товаров в корзине
        count_products();


        fetch("http://localhost:3000/requests", {
                method: "POST",
                headers: {
                        "Content-type": "Application/json"
                },
                body: JSON.stringify({
                        "image": image[0].src,
                        "title": title[0].innerText,
                        "currency": currency[0].innerText,
                        "price": price[0].innerText
                })
        });

};             

// for (var i = 0; i < add_to_card_elements.length; i++) {
//         add_to_card_elements[i].addEventListener("click", shop_elementsFunction, false);
// }

        document.querySelector(".product_list").addEventListener("click", event => {
                console.log(event);

                if(event.target.parentNode.classList.contains("product")) return false;

                var img = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".image img");
                var ttl = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
                var curr = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".currency");
                var prc = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".n_price");
                
                myFunction(img, ttl, curr, prc);

        });

// УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ

// стрелочная функция должна стоять перед циклом. // а простые функции могут быть прописаны и после цикла//// 

function funct_delete_items_from_cart() {
        let click_to_trash = document.querySelectorAll(".cart_trash");

        for(var i = 0; i < click_to_trash.length; i++) {
                click_to_trash[i].addEventListener("click", del_function, false);
        }

        function del_function(evt) {
                evt.preventDefault();
                this.parentNode.parentNode.parentNode.parentNode.remove();

                count_my_cart();
                count_products();
        }
};



// // ПОДСЧЕТ ОБЩЕЙ СТОИМОСТИ В КОРЗИНЕ

//let create_p_total_price = document.createElement('p');


function count_my_cart() {
        let count_cart = document.querySelectorAll(".item .n_price");
        let count_my_cart = 0;

        for(let i = 0; i < count_cart.length; i++) {
                count_my_cart = count_my_cart + (+count_cart[i].textContent);
                
        }

        document.getElementsByClassName("total_in_my_cart")[0].innerText = `$ ${count_my_cart.toFixed(2)}`;
        document.getElementsByClassName("total_in_this_cart")[0].innerText = `$ ${count_my_cart}`;

}

// Подсчет количества товара 

function count_products() {
        let total_products = document.getElementsByClassName("bag_item").length;
        document.getElementsByClassName("quantity")[0].innerHTML = total_products;

}

const tabs = {
        list_of_tabs: [
                "Bestsellers",
                "New products",
                "On sale"
        ]
};

let create_ul_listing = document.createElement("ul");

tabs.list_of_tabs.forEach((item, i) => {
        create_ul_listing.innerHTML += `<li>${item}</li>`;
});
document.querySelector(".block_title").innerHTML += create_ul_listing.outerHTML;