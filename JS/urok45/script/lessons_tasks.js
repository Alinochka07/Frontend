(function () {
   'use strict';






//    class Square {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }


//     multiplication() {
//         return this.width * this.height;
//     }

//     division() {
//         return this.height / this.width;
//     }

//     addition() {
//         return this.width + this.height;
//     }

//    }

//    const result = new Square(7, 14);
//    const result2 = new Square(2, 4);

//    console.log(result.multiplication());
//    console.log(result.division());
//    console.log(result2.addition());


//    class myClass extends Square{
//        constructor(text, value, width, height) {
//            super(width, height);

//            this.text = text;
//            this.value = value;
//        }

//        showText() {
//            console.log(`${this.text} of this ${this.value} is ${result.addition()}`);
//        }
//    }

//    const new_result = new myClass("The CALCULATION", "VALUE", 5, 7);
//    new_result.showText();







   // УРОК 45 - TASK



   class User {
       constructor(name, surname, year) {
           this.name = name;
           this.surname = surname;
           this.year = year;
       }

       getFullName() {
        return (`Student: ${this.name} ${this.surname}, year of enter: ${this.year}`);
        
        
    }
   }
  

   class Student extends User{
       constructor(name, surname, year, grade) {
            super(name, surname, year);
            this.grade = grade;
        
       }

       getCourse() {
           this.grade = 2022 - Number(this.year);
            return (`Grade: ${this.grade}`);
       }
       
   }

   
   const student1 = new Student("Anel", "Kamchibekova", 2018);
   console.log(student1.getFullName());
   console.log(student1.getCourse());
   

}());




