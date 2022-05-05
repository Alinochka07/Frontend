import $ from "jquery";

(function() {

        const   get_product_to_cart = require("./module/get_product_to_cart.js"),
                count_items_in_cart = require("./module/count_items_in_cart.js"),
                delete_items_from_cart = require("./module/delete_from_cart.js"),
                calculate_cart = require("./module/calculate_cart.js"),
                add_to_card = require("./module/add_to_card.js");

        get_product_to_cart();
        // count_items_in_cart();
        delete_items_from_cart(calculate_cart, count_items_in_cart);
        // calculate_cart();
        add_to_card(delete_items_from_cart, calculate_cart, count_items_in_cart);


}());



$(document).ready(function(){
        $("#accordion .card-header").on("click", accord);
});

function accord() {
        $("#accordion .card-body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(1000);
}