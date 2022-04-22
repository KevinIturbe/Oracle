var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");

pincel.fillStyle ="darkgreen";
pincel.fillRect(0,0,350,300);

//ojos
pincel.fillStyle ="black";
pincel.fillRect(50,40,90,90);

pincel.fillStyle ="black";
pincel.fillRect(210,40,90,90);

//nariz
pincel.fillStyle = "black";
pincel.fillRect(140,130,70,100);

//Lo otro

pincel.fillStyle ="black";
pincel.fillRect(100,190,40,110);
pincel.fillStyle = "black";
pincel.fillRect(210,190,40,110);