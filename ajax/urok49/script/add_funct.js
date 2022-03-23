(function() {
    'use strict';

    const inputSom = document.querySelector("#som");
    const inputUSD = document.querySelector("#usd");

    inputSom.addEventListener( "input", () => {
        const request = new XMLHttpRequest();

        // request.open(method(GET/POST), url, async, login, password)
        request.open("GET", "../script/currency.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

        request.addEventListener("load", ()=> {
            if(request.status === 200) {
                console.log(request.response);
                console.log(JSON.parse(request.response));
                const my_currency = JSON.parse(request.response);
                const result = inputSom.value / my_currency.currency.usd;
                inputUSD.value = result.toFixed(2);
            }
            else {
                inputUSD.value = "Something went wrong...";
            }
        });
        // status
        // statusText
        // response
        // readyState

    });


    // Dropdown list of search.        


    const   search = document.querySelector("[name='search']"),
    btnSearch = document.querySelector(".form_search button"),
    search_drop_down = document.querySelector(".search-drop-down");

    search.addEventListener("input", (e) => {
    e.preventDefault();

    const request2 = new XMLHttpRequest();

    request2.open("GET", "../php/search.php?query="+search.value); 
    // request2.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request2.send();

    request2.addEventListener("load", () => {
        if (request2.status === 200) {
            const data = JSON.parse(request2.response);
            console.log(data);

            let create_ul = document.createElement("ul");

            for (let i = 0; i < data.length; i++) {
                // console.log(i);
                create_ul.innerHTML += `<li class="search_li">\
                                        <a href="${data[i].href}">${data[i].text}</a>\
                                        </li>`;
            } 
            search_drop_down.innerHTML = create_ul.outerHTML;
        } else {
            console.log("Error");
        }
    });



});

// Homework.

    const   from_usd_to_kg = document.querySelector("#usd_to_kg"),
            from_kgs_to_usd = document.querySelector("#kg_to_usd"),
            from_ru_to_kgs = document.querySelector("#ru_to_kg"),
            from_kgs_to_ru = document.querySelector("#kg_to_ru");

// USD to KGS
    from_usd_to_kg.addEventListener("click", (e) => {
        e.preventDefault();

        let create_input_usd = document.createElement("input");
        create_input_usd.setAttribute('type', 'text');
        create_input_usd.setAttribute('class', 'USD');
        create_input_usd.setAttribute('placeholder', 'USD');

        var usd_parent = document.getElementById("UsdConverter");
        usd_parent.appendChild(create_input_usd);

        const KgsResult = document.querySelector("#KgsResult");

        create_input_usd.addEventListener("input", () => {
        
            const request3 = new XMLHttpRequest();
            request3.open('GET', '../script/currency.json');
            request3.send();
            request3.addEventListener("load", ()=> {
                if(request3.status === 200) {
                    const usd_currency = JSON.parse(request3.response);
                    const usd_result = create_input_usd.value * usd_currency.currency.usdToKgs;
    
                    KgsResult.innerHTML = `KGS: ${usd_result.toFixed(2)}`;
                }
                else {
                    KgsResult.innerHTML = "Error..";
                }
            });
        });
    }); 

// KGS to USD

    from_kgs_to_usd.addEventListener("click", (e) => {
        e.preventDefault();

        let create_input_kgs = document.createElement("input");
        create_input_kgs.setAttribute('type', 'text');
        create_input_kgs.setAttribute('class', 'KGS');
        create_input_kgs.setAttribute('placeholder', 'KGS');

        var kgs_parent = document.getElementById("KgsUsdConverter");
        kgs_parent.appendChild(create_input_kgs);

        const UsdResult = document.querySelector("#UsdResult");

        create_input_kgs.addEventListener("input", () => {
        
            const request4 = new XMLHttpRequest();
            request4.open('GET', '../script/currency.json');
            request4.send();
            request4.addEventListener("load", ()=> {
                if(request4.status === 200) {
                    const kgs_usd_currency = JSON.parse(request4.response);
                    const kgs_usd_result = create_input_kgs.value * kgs_usd_currency.currency.kgsToUsd;
    
                    UsdResult.innerHTML = `USD: ${kgs_usd_result.toFixed(2)}`;
                }
                else {
                    UsdResult.innerHTML = "Error..";
                }
            });
        });
    }); 

// RUB to KGS

    from_ru_to_kgs.addEventListener("click", (e) => {
        e.preventDefault();

        let create_input_rub = document.createElement("input");
        create_input_rub.setAttribute('type', 'text');
        create_input_rub.setAttribute('class', 'RUB');
        create_input_rub.setAttribute('placeholder', 'RUB');

        var rub_parent = document.getElementById("RubConverter");
        rub_parent.appendChild(create_input_rub);

        const KgsRuResult = document.querySelector("#KgsRuResult");

        create_input_rub.addEventListener("input", () => {
        
            const request5 = new XMLHttpRequest();
            request5.open('GET', '../script/currency.json');
            request5.send();
            request5.addEventListener("load", ()=> {
                if(request5.status === 200) {
                    const rub_kgs_currency = JSON.parse(request5.response);
                    const rub_kgs_result = create_input_rub.value * rub_kgs_currency.currency.ruToKgs;
    
                    KgsRuResult.innerHTML = `USD: ${rub_kgs_result.toFixed(2)}`;
                }
                else {
                    KgsRuResult.innerHTML = "Error..";
                }
            });
        });
    }); 


    // KGS to USD

    from_kgs_to_ru.addEventListener("click", (e) => {
        e.preventDefault();

        let create_input_kgs_ru = document.createElement("input");
        create_input_kgs_ru.setAttribute('type', 'text');
        create_input_kgs_ru.setAttribute('class', 'KGS');
        create_input_kgs_ru.setAttribute('placeholder', 'KGS');

        var kgs_ru_parent = document.getElementById("KgsRuConverter");
        kgs_ru_parent.appendChild(create_input_kgs_ru);

        const RuResult = document.querySelector("#RuResult");

        create_input_kgs_ru.addEventListener("input", () => {
        
            const request6 = new XMLHttpRequest();
            request6.open('GET', '../script/currency.json');
            request6.send();
            request6.addEventListener("load", ()=> {
                if(request6.status === 200) {
                    const kgs_ru_currency = JSON.parse(request6.response);
                    const kgs_ru_result = create_input_kgs_ru.value * kgs_ru_currency.currency.kgsToRu;
    
                    RuResult.innerHTML = `RUB: ${kgs_ru_result.toFixed(2)}`;
                }
                else {
                    RuResult.innerHTML = "Error..";
                }
            });
        });
    }); 



}());