// Cronstrucción de objetos.

// Disponemos de una constante y de una función ya creadas.
const llamalaX="color";

function nombrePropiedad(){return "potencia"+"_coche"};

// Metodo 1.
function metodo1(){
    // Creamos el objeto vacio.
    let coche={};

    /* nombre del objeto y entre corchetes el nombre de la variable 
    y el valor de la propiedad entre commillas.*/
    coche[llamalaX]="azul";

    // Hacemos lo mismo con la función.
    coche[nombrePropiedad()]=400;

    document.getElementById("titulo").innerHTML="Metodo 1 antes de ES6:";
    document.getElementById("codigo").innerHTML=coche + " Presiona F12";
    console.log(coche);
}

// Metodo 2.
function metodo2(){
    
    let coche={
        [llamalaX]:"azul",
        [nombrePropiedad]:400,
    }    
    
    document.getElementById("titulo2").innerHTML="Metodo 2 despues de ES6:";
    document.getElementById("codigo2").innerHTML=coche + " Presiona F12";
    console.log(coche);
}