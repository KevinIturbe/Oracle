const numeroSecreto = Math.round(Math.random()*10);
var input = document.querySelector(".etiqueta");
input.focus();

var secretos = [3,5,7,9]

function verificar () {
    
    var encontrado = false;
    for(var posicion = 0; posicion <4; posicion ++) {
        
        if (secretos[posicion] == parseInt(input.value)) {
        alert("Acertaste");
        encontrado = true;
        break;
    } 
       
    
    }
    if (encontrado == false){
    alert("No acertaste");
    }
    
    input.value = "";
    input.focus();    
}

var button = document.querySelector("button");
button.onclick = verificar;