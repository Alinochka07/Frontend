(function() {

        // // ФУНКЦИИ ГЕНЕРАТОРЫ
        // function* gen() {
        //         yield "A";
        //         yield "l";
        //         yield "i";
        //         yield "n";
        //         yield "a";

        // };
        // const result = gen();

        // console.log(result.next().value); // A
        // console.log(result.next()); // { value: 'l', done: false }
        // console.log(result.next()); // { value: 'i', done: false }
        // console.log(result.next()); // { value: 'n', done: false }
        // console.log(result.next()); // { value: 'a', done: false }
        // console.log(result.next()); // { value: undefined, done: true }

        // //  ГЕНЕРАТОРЫ С ИСПОЛЬЗОВАНИЕМ FOR LOOP

        // function* gener(n) {
        //         for (let i = 0; i < n; i++) {
        //                 yield i;
        //         }
        // };
        // const result2 = gener(5);

        // console.log(result2.next());
        // console.log(result2.next());
        // console.log(result2.next());

        // АНИМАТОРЫ

        // объявление констант
        const cvs = document.getElementById("canvas");
        const ctx = cvs.getContext("2d");

        // картинки

        const bg        = new Image();
        const bird      = new Image();
        const fg        = new Image();
        const tube1     = new Image();
        const tube2     = new Image();

        // Audio

        const fly       = new Audio();
        const score     = new Audio();

        // Присваивание данных

        // картинки
        bg.src      = "../img/animation/bg.png";
        bird.src    = "../img/animation/bird.png";
        fg.src      = "../img/animation/fg.png"; 
        tube1.src   = "../img/animation/tubeNorth.png";
        tube2.src   = "../img/animation/tubeSouth.png";

        fly.src     = "../audio/point.mp3";

        document.addEventListener("keydown", flyUp);

        function flyUp() {
                fly.play();
                yPos -= 25;
        }
        let xPos = 10;
        let yPos = 150;
        let padd = 90;
        let grav = 1.2;
        let pad2 = 0;

        function draw() {
                ctx.drawImage(bg, 0, 0);

                ctx.drawImage(tube1, 100, 0);
                ctx.drawImage(tube2, 100, tube1.height + 90);
                ctx.drawImage(fg, 0, cvs.height - fg.height);
                ctx.drawImage(bird, xPos, yPos);

                yPos += grav;

                requestAnimationFrame(draw);
        }

        tube2.onload = draw;





        





        



       
       

        


        
        




        
        


}());