var ingredientes = [];
    var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
    var contador = 1;

    while(contador <= cantidad) {
        var ingrediente = prompt("Informe el ingrediente " + contador);
        
        if(ingrediente == ingredientes[contador]){ 
            alert("El ingrediente ya está")

        }
        
        ingredientes.push(ingrediente);
        contador++;
    }

    document.write(ingredientes);

