
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);

    function dibujarCirculo(x, y, radio, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*3.14);
        pincel.fill();
    }

dibujarCirculo(50,50,10,"blue");
dibujarCirculo(70,50,10,"green");  
dibujarCirculo(90,50,10,"yellow");
dibujarCirculo(70,30,10,"black");
dibujarCirculo(70,70,10,"red");