(function() {
    'use strict';


    const inputSom = document.querySelector("#som");
    const inputUSD = document.querySelector("#usd");

    inputSom.addEventListener( "input", () => {
        
        const request = new XMLHttpRequest();

        // request.open(method(GET/POST), url, async, login, password)
        request.open("GET", "../Json/currency.json");

        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

        request.addEventListener( "load", ()=> {
            
            if(request.status === 200) {
                // console.log(request.response);
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


        const   search = document.querySelector("[name='search']"),
                btnSearch = document.querySelector(".form_search button");

        btnSearch.addEventListener("click", (e) => {
            e.preventDefault();

            const request2 = new XMLHttpRequest();

            request2.open("GET", "../script/search.php?query="+search.value);
            // request2.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            request2.send();

            request2.addEventListener("load", () => {
                if (request2.status === 200) {
                    const data = JSON.parse(request2.response);
                    console.log(data);

                    let create_ul = document.createElement("ul");

                    for (let i = 0; i < data.length; i++) {
                        console.log(i);
                        // create_ul.innerHTML += `<li>
                        //                         <a href="${data[i].href}">${data.[i].text}</a>
                        //                         </li>`;
                    }
                } else {
                    console.log("Error");
                }
            });



        });



    });






























}());