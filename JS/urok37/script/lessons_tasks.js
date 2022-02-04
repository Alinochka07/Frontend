"use strict";


// УРОК 35

        // let x = 5;
        // let y = x;

        // x = 15;

        // console.log(y); // 5 

        // let object = {
        //         x: 5,
        //         y: 10
        // };

        // const new_object = object;

        // new_object.x = 100;

        // console.log(new_object); // { x: 100, y: 10 }
        // console.log(object); // { x: 100, y: 10 } - здесь даже при изменении данных в копии объекта, значение меняется с исходного объекта, т.к объект был унаследован.

        // // Теперь попробуем продублировать так, чтобы при изменении нового значения, старые элементы в объекте оставались неизменными.

        // function dublicate_object(thisObject) {

        //         const newObject = {};
                
        //         for(let key in thisObject) {
        //                 newObject[key] = thisObject[key];
        //         }
        //         return newObject;
        // }

        // const oldObject = {
        //         name: "Anel",
        //         age: 4,
        //         parents: {
        //                 mother: "Zarina",
        //                 father: "Kanybek"
        //         },
        //         sibling: {
        //                 type: {
        //                         brother: "Umar",
        //                         age: 2
        //                 }
        //         }
        // };

        // console.log(oldObject);
        // // {
        // //         name: 'Anel',
        // //         age: 4,
        // //         parents: { mother: 'Zarina', father: 'Kanybek' },
        // //         sibling: { type: { brother: 'Umar', age: 2 } }
        // //       }

        // newObject = dublicate_object(oldObject);
        // console.log(newObject);
        // // {
        // //         name: 'Anel',
        // //         age: 4,
        // //         parents: { mother: 'Zarina', father: 'Kanybek' },
        // //         sibling: { type: { brother: 'Umar', age: 2 } }
        // //       }

        // newObject.age = 5;
        // console.log(newObject);
        // // {
        // //         name: 'Anel',
        // //         age: 5,
        // //         parents: { mother: 'Zarina', father: 'Kanybek' },
        // //         sibling: { type: { brother: 'Umar', age: 2 } }
        // //       }
                
        // newObject.sibling.type.age = 3;
        // console.log(newObject);
        // // {
        // //         name: 'Anel',
        // //         age: 5,
        // //         parents: { mother: 'Zarina', father: 'Kanybek' },
        // //         sibling: { type: { brother: 'Umar', age: 3 } }
        // //       }


        // console.log(oldObject);
        // // {
        // //         name: 'Anel',
        // //         age: 4,
        // //         parents: { mother: 'Zarina', father: 'Kanybek' },
        // //         sibling: { type: { brother: 'Umar', age: 3 } }
        // //       }


        // // Другая опция дублировать объекты, с наименьшим кодом.
        // const newAssign = Object.assign({}, oldObject);
        // newAssign.age = 6;
        // newAssign.sibling.type.age = 4;
        // console.log(newAssign);
        // console.log(oldObject);

        // const massive = ["apple", "pear", "grapes"];

        // const new_massive = massive;
        // new_massive[0] = "orange";

        // console.log(new_massive); // [ 'orange', 'pear', 'grapes' ]
        // console.log(massive); // [ 'orange', 'pear', 'grapes' ]

        // const independent_massive = massive.slice();
        // independent_massive[0] = "melon";

        // console.log(independent_massive); // [ 'melon', 'pear', 'grapes' ]
        // console.log(massive); // [ 'orange', 'pear', 'grapes' ]


        // const technology = ["computer", "printer", "tablet"],
        //         appliance = ["TV", "refrigerator", "washing machine"],
        //         combo = [...technology, ...appliance, "air conditioner"];  // метод Spread 

        // console.log(combo);
        // [
        //         'computer',
        //         'printer',
        //         'tablet',
        //         'TV',
        //         'refrigerator',
        //         'washing machine',
        //         'air conditioner'
        //       ]

        // const new_technology = [...technology];
        // new_technology[0] = "Smartphone";

        // console.log(new_technology); // [ 'Smartphone', 'printer', 'tablet' ]
        // console.log(technology); // [ 'computer', 'printer', 'tablet' ]

        // const obj = {
        //         a: 1,
        //         b: 2
        // };

        // const new_obj = {...obj};
        // new_obj.a = 13;
        // console.log(new_obj); // { a: 13, b: 2 }
        // console.log(obj); // { a: 1, b: 2 }


// УРОК 35 - TASK

                // Сделайте функцию которая принимает информацию о пользователе, 
                //  - Функция принимает три аргумента 
                //    1. Первый параметр для имени 
                //    2. Второй для Фамилии 
                //    3. третий для дополнительной информации о пользователе 
                // если пользователь ввел все правильно, то на консоли выводится имя, фамилия, и 4 доп данных о пользователе. 
                // например:
                // input: getPersonInfo('Brad', 'Pit', 'option1', 'option2', 'option3', 'option4')
                // output: Brad Pit option1,option2,option3,option4 

                // input: getPersonInfo('Brad', 'Pit', 'option1', 'option2', 'option3', 'option4', 'option5')
                // output: Brad Pit option1,option2,option3,option4 функция принимает только 4 опции


                // let name = prompt("Enter the name");
                // let surname = prompt("Enter the surname");
                // let age = prompt("Enter the age");

                // const myPerson = {
                //         name: "Brad",
                //         surname: "Pitt",
                //         age: 58,
                //         occupation: "actor",
                //         movies: {
                //                 2005: "Mr. & Mrs. Smith",
                //                 2008: "Benjamin Button",
                //                 2022: "Bullet Train"
                //         },
                //         nationality: "American"
                // };

                // function getPersonalInfo(name, surname, age) {
                //         if (name === myPerson[name] && surname === myPerson[surname] && age === myPerson[age]) {
                //                 console.log(myPerson);
                //         } 
                // }
                // getPersonalInfo();


// УРОК 36 - ООП (Объектно-ориентированное программирование ), (Прототипно-ориентированное наследование)

        // Option #1
        // let car = {
        //         body: "metal",
        //         wheel: 4
        // }

        // let vehicle_kind = {
        //         brand: "Toyota",
        //         type: "Aqua",
        //         year: 2021
        // }

        // vehicle_kind.__proto__ = car; // __proto__ связал эти два метода в один, и сделал car неизменяемым.

        // console.log(vehicle_kind.wheel); // 4 



        // Option #2

        // let car = {
        //         body: "metal",
        //         wheel: 4,
        //         modal: function() {
        //                 console.log("Hello!");
        //         }
        // };

        // let vehicle_kind = {
        //         brand: "Toyota",
        //         type: "Aqua",
        //         year: 2021
        // };

        // vehicle_kind.__proto__ = car;

        // console.log(vehicle_kind.modal);
        // vehicle_kind.modal();

        // Option #3

        // let car = {
        //         body: "metal",
        //         wheel: 4,
        //         modal: function() {
        //                 console.log("Hello!");
        //         }
        // };

        // let vehicle_kind = {
        //         brand: "Toyota",
        //         type: "Aqua",
        //         year: 2021
        // };

        // Object.setPrototypeOf(vehicle_kind, car);

        // console.log(vehicle_kind.modal);
        // vehicle_kind.modal();


        // Option #4

        // let car = {
        //         body: "metal",
        //         wheel: 4,
        //         modal: function() {
        //                 console.log("Hello!");
        //         }
        // };

        // let vehicle_kind = Object.create(car);

        // vehicle_kind = {
        //         brand: "Toyota",
        //         type: "Aqua",
        //         year: 2021
        // };

        // console.log(vehicle_kind.modal);
        // vehicle_kind.modal();


        // let user = {
        //         name: "John",
        //         surname: "Smith",
              
        //         set fullName(value) {
        //           [this.name, this.surname] = value.split(" ");
        //         },
              
        //         get fullName() {
        //           return `${this.name} ${this.surname}`;
        //         }
        //       };
              
        //       let admin = {
        //         __proto__: user,
        //         isAdmin: true
        //       };
              
        //       alert(admin.fullName); // John Smith (*)
              
        //       // срабатывает сеттер!
        //       admin.fullName = "Alice Cooper"; // (**)
        //       alert(admin.name); // Alice
        //       alert(admin.surname); // Cooper


              // методы animal
                // let animal = {
                //         walk() {
                //         if (!this.isSleeping) {
                //         alert(`I walk`);
                //         }
                //         },
                //         sleep() {
                //         this.isSleeping = true;
                //         }
                // };
                
                // let rabbit = {
                //         name: "White Rabbit",
                //         __proto__: animal
                // };
                
                // // модифицирует rabbit.isSleeping
                // rabbit.sleep();
                
                // alert(rabbit.isSleeping); // true
                // alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

                // let animal = {
                //         eats: true
                //       };
                      
                //       let rabbit = {
                //         jumps: true,
                //         __proto__: animal
                //       };
                      
                //       // Object.keys возвращает только собственные ключи
                //       alert(Object.keys(rabbit)); // jumps
                      
                //       // for..in проходит и по своим, и по унаследованным ключам
                //       for(let prop in rabbit) alert(prop); // jumps, затем eats

                // let animal = {
                //         eats: true
                //       };
                      
                //       let rabbit = {
                //         jumps: true,
                //         __proto__: animal
                //       };
                      
                //       for(let prop in rabbit) {
                //         let isOwn = rabbit.hasOwnProperty(prop);
                      
                //         if (isOwn) {
                //           alert(`Our: ${prop}`); // Our: jumps
                //         } else {
                //           alert(`Inherited: ${prop}`); // Inherited: eats
                //         }
                //       }


        

// УРОК 36 - TASK
                        // input: let salary = {
                        //         almaz: 1200,
                        //         adilet: 1300,
                        //         nursultan: 3000,
                        //     };
                        //     let bonus = {
                        //         almaz: 400,
                        //         adilet: 300,
                        //         nursultan: 200,
                        //     }
                        
                        //     Сделайте метод который будет суммировать зарплату с бонусом 
                        
                        //     output: almaz 1600, adilet 1600, nursultan 3200 

                                let salary = {
                                        Almaz: 1200,
                                        Adilet: 1300,
                                        Nursultan: 3000,
                                };

                                let bonus = {
                                        almaz: 400,
                                        adilet: 300,
                                        nursultan: 200,
                                        };

                                Object.setPrototypeOf(bonus, salary);

                                console.log(`almaz ${bonus.almaz+bonus.Almaz}`);
                                console.log(`adilet ${bonus.adilet+bonus.Adilet}`);
                                console.log(`nursultan ${bonus.nursultan+bonus.Nursultan}`);
    