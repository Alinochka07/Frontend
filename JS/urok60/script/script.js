(function() {

        // async function someFunction() {
        //         const response = await fetch("../script/currency.json", {
        //                 method: "GET",
        //                 headers: {"Content-type": "application/json"}
        //         });
                
        //         const current = await response.json();

        //         console.log(current);
        //         console.log(current.currency.usd);
                
        // }
        // someFunction();

        // const select_curr = document.querySelector("#select_curr");
        // const usd = document.querySelector("#usd");
        // const rub = document.querySelector("#rub");
        // const euro = document.querySelector("#euro");
        // let switcher = document.querySelector("#switch");


        // let create_input_usd = document.createElement("input");
        // create_input_usd.setAttribute("placeholder", "USD");
        // create_input_usd.setAttribute("type", "text");
        // create_input_usd.setAttribute("id", "USD_Input");
        // let usd_parent = document.getElementById("foreign_l");
        // usd_parent.appendChild(create_input_usd);

        // let create_input_kgs = document.createElement("input");
        // create_input_kgs.setAttribute("placeholder", "KGS");
        // create_input_kgs.setAttribute("type", "text");
        // create_input_kgs.setAttribute("id", "KGS_Input");
        // let kgs_parent = document.getElementById("KGS");
        // kgs_parent.appendChild(create_input_kgs);


        // select_curr.addEventListener("change", function(ee) {
        //         ee.preventDefault();
        //         usd.addEventListener("change", print);

        // });

        
        // let foreign_input = document.querySelector("#foreign"),
        //         kgz_input = document.querySelector("#kgz_conv");

        // selectId.addEventListener("change", function() {
        //         console.log("USD");

        //         let create_input_usd = document.createElement("input");
        //         create_input_usd.setAttribute("placeholder", "USD");
        //         create_input_usd.setAttribute("type", "text");
        //         create_input_usd.setAttribute("id", "USD_Input");

        //         let usd_parent = document.getElementById("foreign_l");
        //         usd_parent.appendChild(create_input_usd);
                
        // });

                        
                

                // create_input_usd.addEventListener("input", () => {
                //         fetch('../script/currency.json') 
                //         .then(function(response) {
                //         return response.json();
                //         })
                //         .then(function(data) {
                //         const result = data.currency.usdToKgs * create_input_usd.value;
                //         create_input_kgs.value = result.toFixed(2);
                //         });
                        
                // });

                // switch_btn.addEventListener("click", () => {
                //         const img1 = document.querySelector("#usd");
                //         const img2 = document.querySelector("#kgs");

                //         img1.src = "../img/flags/kgs.png";
                //         img2.src = "../img/flags/usd.png";

                // });

        // });

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



        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //         method: "POST",
        //         body: JSON.stringify({name: "Productname"}),
        //         headers: {
        //                 "Content-type": "application/json"
        //         }
        // })
        // .then(Response => Response.json())
        // .then(json => console.log(json));

        


// LESSON 55


        // fetch("http://localhost:3000/products")
        // .then(data => data.json())
        // .then(result => console.log(result));

        // axios.post("http://localhost:3000/products")
        //         .then(data => console.log(data.data));

        // class Thenable {
        //         constructor(num) {
        //                 this.num = num;
        //         }
        //         then(resolve, reject) {
        //                 alert(resolve);
        //                 setTimeout(() => resolve(this.num * 2), 1000);
        //         }
        // };

        // async function f() {
        //         let = result = await new Thenable(5);
        //         alert(result);
        // }
        // f();

        // localStorage.setItem("username", "Alina");
        // localStorage.setItem("usersname", "Akylbekova");
        
        // const result = localStorage.getItem("username");
        // // console.log(result);

        // localStorage.clear();
        // console.log(result);






        
        // GETTER & SETTER

        // const Person = {
        //         name: "Anel",
        //         age: 5,
        //         gender: "girl",

        //         get userInfo() {
        //                 return `${this.name}, ${this.age}, ${this.gender}`; 
        //         },

        //         set userInfo(value) {
        //                 [this.name, this.age, this.gender] = value.split(" ");
        //         },
                
        // };
        // console.log(Person.userInfo); // Anel, 5, girl
        // Person.userInfo = "Umar 2 boy";
       
        // console.log(Person.userInfo); // Umar, 2, boy
        // console.log(Person.gender); // boy     


        // let user = {
        //         get name() {
        //                 return this.Nname;
        //         },
        //         set name(value) {
        //                 if(value.length < 3) {
        //                         console.log("Too short");
        //                         return;
        //                 }
        //                 this.Nname = value;
                        
        //         }
        // };

        // user.name = "Alina";
        // console.log(user.name);


        // function User(name, age) {
        //         this.name = name;
        //         this.age = age;
        // }
        // let student1 = new User("Alina", 34);
        // console.log(student1);

        // function User(name, birthday) {
        //         this.name = name;
        //         this.birthday = birthday;
        // }
        // student1 = new User("Alina", new Date(1988, 1, 3));
        // console.log(student1);

        // Object.defineProperty(this, "age", {
        //         get() {
        //                 let todayYear = new Date().getFullYear();
        //                 return todayYear - this.birthday.getFullYear();
        //         }
        // });

        // student1 = new User("Alina", new Date(1988, 1, 3));

        // console.log(student1.birthday);
        // console.log(student1.age);



        // УРОК 60 - МОДУЛИ и КАК ИСПОЛЬЗОВАТЬ


        const user = (function() {
                
                let username = function() {
                        console.log("Alina");
                };

                return {
                        sayHello: username
                };

        }());
        user.sayHello();


        





        



       
       

        


        
        




        
        


}());