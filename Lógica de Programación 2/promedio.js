var integrantes = parseInt(prompt("Ingrese número de integrantes"));
var contador = 0;
 var Total = 0;
while (contador < integrantes) {
   
    edades = parseInt(prompt("Ingresa la edad del miembro"));
    Total = Total + edades;
    contador ++;
}

document.write("El promedio de las edades de la familia es: " + (Total/integrantes))