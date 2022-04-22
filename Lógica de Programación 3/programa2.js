function dibujarVerde(x,y,color){var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = color
pincel.fillRect(x,y,50,50);
pincel.strokeStyle= "black"
pincel.strokeRect(x,y,50,50);}

dibujarVerde(0,0,"blue");
dibujarVerde(50,50,"lightblue");
dibujarVerde(100,100,"green");