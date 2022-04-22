//var nombre = prompt("Ingrese su nombre");
var peso = prompt("Ingrese su peso");
var altura = prompt("Ingrese su altura");


function IMC (peso, altura) {
    IMCcalculado = peso/(altura * altura)
    
    return IMCcalculado
}

document.write("Su IMC es " + IMC(peso,altura))

if (IMCcalculado < 18.5 )
{document.write("insuficiencia ponderal")

} else if (IMCcalculado >= 18.5 || IMCcalculado < 25 ) {document.write(" Normal")

} else {document.write( "Sobrepeso")
}

