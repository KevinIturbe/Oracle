 var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function cuadro (x,y,color) { 
    pincel.fillStyle=color;
    pincel.lineTo(00+x,00+y);
    pincel.lineTo(00+x,50+y);
    pincel.lineTo(50+x,50+y);
    pincel.lineTo(50+x,00+y);
    pincel.fill();
}

cuadro(50,50,"red");
