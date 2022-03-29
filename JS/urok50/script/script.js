(function() {

        // УРОК 50
        console.log("Data request...");


        const request = new Promise(function(resolve, reject) {

                setTimeout(() => {
                        console.log("Data processing...");

                        const data = {
                                title: "Product",
                                price: 5000
                        };

                        resolve(data);
                }, 1500);
        });

        request.then(data => {
                return new Promise(function(resolve, reject) { // resolve возвращает data, reject минует данные и возвращает catch.
                        setTimeout(() => {
                                data.status = "inactive";
                                reject(data);
                        });
                });

        }, 2000).then(data => {
                data.modify = "modify";
                return data;

        }).then(data => {
                console.log(data);

        }).catch(() => {
                console.log("Something went wrong during getting information...");

        }).finally(() => {
                console.log("Data clerance");
        });

        const test = time => {
                return new Promise(resolve => {
                        setTimeout(() => resolve(), time);
                });
        };

        test(1000).then(() => console.log("Time in 1000ms"));
        test(2000).then(() => console.log("Time in 2000ms"));

        Promise.all([test(1000), test(2000)]).then(() => {
                console.log("All done");
        });

        Promise.race([test(1000), test(2000)]).then(() => {
                console.log("All done");
        });

        
        let myFirstPromise = new Promise((resolve, reject) => {
                setTimeout(function(){
                  resolve("Success!");
                }, 250);
              });
              
              myFirstPromise.then((successMessage) => {
                console.log("Ура! " + successMessage);
              });


              

        // TASK 50
        

        const loadScript = new Promise(function(resolve, reject) {
                addEventListener("load", () => {
                        const script1 = document.createElement("script");
                        script1.setAttribute("src", "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js");
                        script1.setAttribute("id", "popper");
                        const head_parent = document.querySelector("head");
                        head_parent.appendChild(script1);
                        resolve(loadScript);
                });
        }).then(
                addEventListener("load", () => {
                        const script2 = document.createElement("script");
                        script2.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js");
                        script2.setAttribute("id", "bootstrap");
                        const head2_parent = document.querySelector("head");
                        head2_parent.appendChild(script2);
                })
        );
        
        


}());