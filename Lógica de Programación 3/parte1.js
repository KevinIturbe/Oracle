var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");


pincel.fillStyle = "lightgrey" //propiedad
pincel.fillRect(0,0,600,400) //función

pincel.fillStyle = "blue";
pincel.fillRect(200,0,200,400);

pincel.fillStyle = "red";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "black" //propiedad
// pincel.fillRect(275,175,50,50) //función
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();