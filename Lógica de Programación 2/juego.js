var numeroFijo = Math.round(Math.random()*10)
var numeroadivinado = parseInt(prompt("introduzca un número del 1 al 10"))

if ( numeroadivinado == numeroFijo) {
    document.write("Adivinaste")
} else if (numeroadivinado < numeroFijo ) {
    document.write("el número es mayor, el número pensado era " + numeroFijo)
} else {
   document.write("el numero es menor, el número pensado era " + numeroFijo) 
}