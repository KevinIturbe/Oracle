function saltarLinea() {
    document.write("<br>");
    }
function imprimir(frase) {
    document.write(frase);
    saltarLinea();
    }

var edad = parseInt(prompt("¿Cuál es tu edad?"));
var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");

if(edad >= 18 && tieneLicencia == "S"){ 
    document.write("Puedes conducir")
} else {document.write("No puedes")
}