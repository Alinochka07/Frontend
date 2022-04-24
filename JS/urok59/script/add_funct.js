(function() {
    'use strict';

    // Dropdown list of search.        

    const   search = document.querySelector("[name='search']"),
    search_drop_down = document.querySelector(".search-drop-down");

    search.addEventListener("input", (e) => {
        e.preventDefault();

        fetch('../php/search.php', {
                method: "POST",
                body: JSON.stringify({query: search.value}),
                headers: {
                        "Content-type": "application/json"
                }
        })
        .then(response => response.json())
        .then(json => {

                let create_ul = document.createElement("ul");
                for (let i = 0; i < json.length; i++) {
                    create_ul.innerHTML += `<li class="search_li">\
                                            <a href="${json[i].href}">${json[i].text}</a>\
                                            </li>`;
                } 
                search_drop_down.innerHTML = create_ul.outerHTML;
        })
        .catch(console.log("Error"));

        // Пример отправки POST запроса:

        // async function postData(url = '', data = {}) {
        // // Default options are marked with *
        //     const response = await fetch(url, {
        //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //         mode: 'cors', // no-cors, *cors, same-origin
        //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //         credentials: 'same-origin', // include, *same-origin, omit
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         redirect: 'follow', // manual, *follow, error
        //         referrerPolicy: 'no-referrer', // no-referrer, *client
        //         body: JSON.stringify(data) // body data type must match "Content-Type" header
        //     });
        //     return await response.json(); // parses JSON response into native JavaScript objects
        // }

        // postData('https://example.com/answer', { answer: 42 })
        // .then((data) => {
        //     console.log(data); // JSON data parsed by `response.json()` call
        // });

    });


    
// // Domashnee Zadanie # 51

//     const   from_usd_to_kg = document.querySelector("#usd_to_kg"),
//             from_kgs_to_usd = document.querySelector("#kg_to_usd"),
//             from_ru_to_kgs = document.querySelector("#ru_to_kg"),
//             from_kgs_to_ru = document.querySelector("#kg_to_ru"),
//             from_kgs_to_euro = document.querySelector("#kg_to_eu");

// // USD to KGS
//     from_usd_to_kg.addEventListener("click", (e) => {
//         e.preventDefault();

//         let create_input_usd = document.createElement("input");
//         create_input_usd.setAttribute('type', 'text');
//         create_input_usd.setAttribute('class', 'USD');
//         create_input_usd.setAttribute('placeholder', 'USD');

//         var usd_parent = document.getElementById("UsdConverter");
//         usd_parent.appendChild(create_input_usd);

//         const KgsResult = document.querySelector("#KgsResult");

//         create_input_usd.addEventListener("input", () => {
//             fetch('../script/currency.json') 
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const result = data.currency.usdToKgs * create_input_usd.value;
//                 KgsResult.innerHTML = `KGS: ${result.toFixed(2)}`;
//             });
            
//         });

//     }); 

// // KGS to USD

//     from_kgs_to_usd.addEventListener("click", (e) => {
//         e.preventDefault();

//         let create_input_kgs = document.createElement("input");
//         create_input_kgs.setAttribute('type', 'text');
//         create_input_kgs.setAttribute('class', 'KGS');
//         create_input_kgs.setAttribute('placeholder', 'KGS');

//         var kgs_parent = document.getElementById("KgsUsdConverter");
//         kgs_parent.appendChild(create_input_kgs);

//         const UsdResult = document.querySelector("#UsdResult");

//         create_input_kgs.addEventListener("input", () => {
//             fetch('../script/currency.json') 
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const result = create_input_kgs.value * data.currency.kgsToUsd;
//                 UsdResult.innerHTML = `USD: ${result.toFixed(2)}`;
//             });
            
//         });
//     }); 

// // RUB to KGS

//     from_ru_to_kgs.addEventListener("click", (e) => {
//         e.preventDefault();

//         let create_input_rub = document.createElement("input");
//         create_input_rub.setAttribute('type', 'text');
//         create_input_rub.setAttribute('class', 'RUB');
//         create_input_rub.setAttribute('placeholder', 'RUB');

//         var rub_parent = document.getElementById("RubConverter");
//         rub_parent.appendChild(create_input_rub);

//         const KgsRuResult = document.querySelector("#KgsRuResult");

//         create_input_rub.addEventListener("input", () => {
//             fetch('../script/currency.json') 
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const result = create_input_rub.value * data.currency.ruToKgs;
//                 KgsRuResult.innerHTML = `KGS: ${result.toFixed(2)}`;
//             });
            
//         });
//     }); 


//     // KGS to USD

//     from_kgs_to_ru.addEventListener("click", (e) => {
//         e.preventDefault();

//         let create_input_kgs_ru = document.createElement("input");
//         create_input_kgs_ru.setAttribute('type', 'text');
//         create_input_kgs_ru.setAttribute('class', 'KGS');
//         create_input_kgs_ru.setAttribute('placeholder', 'KGS');

//         var kgs_ru_parent = document.getElementById("KgsRuConverter");
//         kgs_ru_parent.appendChild(create_input_kgs_ru);

//         const RuResult = document.querySelector("#RuResult");

//         create_input_kgs_ru.addEventListener("input", () => {
//             fetch('../script/currency.json') 
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const result = create_input_kgs_ru.value * data.currency.kgsToRu;
//                 RuResult.innerHTML = `RUB: ${result.toFixed(2)}`;
//             });
            
//         });
//     }); 


//     // KGS to EURO

//     from_kgs_to_euro.addEventListener("click", (e) => {
//         e.preventDefault();

//         let create_input_kgs_euro = document.createElement("input");
//         create_input_kgs_euro.setAttribute('type', 'text');
//         create_input_kgs_euro.setAttribute('class', 'KGS');
//         create_input_kgs_euro.setAttribute('placeholder', 'KGS');

//         var kgs_euro_parent = document.getElementById("KgsEuConverter");
//         kgs_euro_parent.appendChild(create_input_kgs_euro);

//         const EuResult = document.querySelector("#EuResult");

//         create_input_kgs_euro.addEventListener("input", () => {
//             fetch('../script/currency.json') 
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 const result = create_input_kgs_euro.value * data.currency.kgsToEuro;
//                 EuResult.innerHTML = `EURO: ${result.toFixed(2)}`;
//             });
            
//         });
//     }); 



}());




// let create_input_usd = document.createElement("input");
                // create_input_usd.setAttribute('type', 'text');
                // create_input_usd.setAttribute('class', 'USD');
                // create_input_usd.setAttribute('placeholder', 'USD');
                

                // var typObject = document.getElementById("UsdConverter");
                // typObject.appendChild(create_input_usd);

                // if (create_input_usd.length == 1) {
                //         create_input_usd.click(function(event) {
                //                 event.stopImmediatePropagation();
                //         });
                // }
                

                // input KGS


                // let create_input_kgs = document.createElement("input");
                // create_input_kgs.setAttribute('type', 'text');
                // create_input_kgs.setAttribute('class', 'KGS');
                // create_input_kgs.setAttribute('placeholder', 'KGS');

                // var typObject2 = document.getElementById("UsdKgsResult");
                // typObject2.appendChild(create_input_kgs);

                // var readyExecuted = false;

                // if(!readyExecuted) {
                //         create_input_usd.length == 1 && create_input_kgs.length == 1;
                //         readyExecuted = true;
                // }


        // UROK 56

        // let form_submit_btn = document.querySelector("#form_submit_btn");
        // let form_clear_btn = document.querySelector("#form_clear_btn");

        // const check_name_ = localStorage.getItem("name_");
        // const check_fname = localStorage.getItem("fname");
        // const check_phone = localStorage.getItem("phone");
        // const check_address = localStorage.getItem("address_");

        // if(check_name_ || check_fname || check_phone || check_address) {
        //         document.getElementsByClassName("name")[0].value = check_name_;
        //         document.querySelector("[name='fname']").value = check_fname;
        //         document.querySelector("[name='phone']").value = check_phone;
        //         document.querySelector("[name='address']").value = check_address;
        // }


        // form_submit_btn.addEventListener("click", function() {
        //         const name_ = document.getElementsByClassName("name")[0].value;
        //         const fname = document.querySelector("[name='fname']").value;
        //         const phone = document.querySelector("[name='phone']").value;
        //         const address_ = document.querySelector("[name='address']").value;

        //         if(name_ && fname && phone && address_) {
        //                 localStorage.setItem("name_", name_);
        //                 localStorage.setItem("fname", fname);
        //                 localStorage.setItem("phone", phone);
        //                 localStorage.setItem("address_", address_);

        //         } else {
        //                 console.log("Empty");
        //         }


        
        // });

        // form_clear_btn.addEventListener("click", function() {
        //         localStorage.clear();
        // });