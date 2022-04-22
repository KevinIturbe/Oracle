var victorias = parseInt(prompt("¿Cuántas victorias"));
var empates = parseInt(prompt("¿Cuántos empates"));

var total = (victorias * 3) + empates;

document.write("El total de puntos es: " + total);