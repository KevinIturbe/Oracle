var inicioDeSesionRegistrado = "alura";
var contrasenhaRegistrada = "alura321";



var i=1;

while (i<=3)  {

    var inicioDeSesionIngresado = prompt("Ingrese su usuario");
    var contrasenhaIngresada = prompt("Ingrese su contraseña");

    if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
        alert("Bienvenido al sistema " + inicioDeSesionIngresado);
        break;
    } else {
        alert("inicio de sesión inválido. Favor intente de nuevo");
        i++;
    }
    
}