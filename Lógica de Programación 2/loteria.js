function sortea (n) {
   return n = Math.round(Math.random()*n)
}

var numero = sortea(10)

i=1

while (i<=3) {
    var usuario = parseInt(prompt("Ingrese un número del 0 al 10"))
   
    if (numero == usuario) { 
        alert("Adivinaste")
        break;
    } else if (usuario < numero){
        alert("el numero era mayor")
    } else if (usuario> numero) {
        alert("El número era menor")
}
    i++;
    if(i == 4) {
        document.write("el número era "+ numero)
    }
}