(function () {
    "use strict";

    class cardProduct {
        constructor(comment, comment_color, image, title, descr_header, descr_text, n_price, oldprice, innerBlock) {
            this.comment = comment;
            this.comment_color = comment_color;
            this.image = image;
            this.title = title;
            this.descr_header = descr_header;
            this.descr_text = descr_text;
            this.n_price = n_price;
            this.oldprice = oldprice;
            this.innerBlock = document.querySelector(innerBlock);
            this.currency = 90;
            this.n_price = this.convertToUSD(this.n_price);
            this.oldprice = this.convertToUSD(this.oldprice);
            // this.convertToUSD();
        }

        convertToUSD(price) {
            const currency_result = price / this.currency;
            return currency_result.toFixed(2);
            // this.n_price = this.n_price / this.currency;
            // this.oldprice = this.oldprice / this.currency;
        }

        render() {
            const div_render = document.createElement("div");
            div_render.classList.add("product");
        
            div_render.innerHTML = `<div class="product" id="product1">
                                    <div class="image">
                                        <img src=${this.image} alt="product1" class="picture" id="animal_print">
                                            <div class="comment ${this.comment_color}">
                                                <i class="fas fa-comment"></i>
                                                <span>${this.comment}</span>
                                                
                                            </div>
                                        <div class="descr_image">
                                            <div class="image_text">
                                                <p>${this.descr_header}</p>
                                                <p>${this.descr_text} <span class="red pointer">here</span></p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="body_product">
                                        <a href="" class="no_a_decoration">
                                            <p class="title">${this.title}</p></a>
                                        <div class="block_stars">
                                            <div class="stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="reviews">
                                                <span>6 Review(s)</span>
                                            </div>
                                        </div>
                                        <div class="price">
                                                <span class="currency">$</span>
                                                <span class="n_price">${this.n_price}</span>
                                                <del class="oldprice">$ ${this.oldprice}</del>
                                        </div>
                                        <div class="buttons disp_none">
                                            <ul class="ul_li">
                                                <li>
                                                    <a href="#" class="add_to_card">
                                                        <span class="gray-round">
                                                            <i class="fas fa-shopping-bag"></i>
                                                        </span>
                                                    </a>
                                                    
                                                </li>
                                                <li>
                                                    <span class="gray-round">
                                                        <i class="fas fa-balance-scale"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span class="gray-round">
                                                        <i class="fas fa-heart"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;

            this.innerBlock.append(div_render);
        }
    }

    // comment, image, title, descr_text, n_price, oldprice, innerBlock

    new cardProduct(
        "-30%",
        "green",
        "../img/product/product1/img5.jpeg",
        "Girl's clothes",
        "New product",
        "Cotton linen soft fabric. Easy to wash and care...",
        1050,
        1500,
        ".product_list"
    ).render();

    new cardProduct(
        "Sale",
        "orange",
        "../img/product/product1/img6.jpeg",
        "Baby clothing",
        "Most sold item",
        "Cotton linen soft fabric. Easy to wash and care...",
        1350,
        2000,
        ".product_list"
    ).render();





}());