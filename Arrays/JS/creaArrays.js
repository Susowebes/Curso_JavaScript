// Vamos a crear Arrays.

// Mensaje de prueba
// alert("Hola que tal");

function ocultar(){
    // Enlace al ancla creada en el html te lleva a su posición.
    location.href = "#arriba";

    // Arrays literales
    document.getElementById("p-cont1").style.visibility="hidden";
    document.getElementById("p-cont1").style.position="absolute";
    
    // Con operador spread
    document.getElementById("p-cont2").style.visibility="hidden";
    document.getElementById("p-cont2").style.position="absolute";

}

// Arrays literales

function creArray(){
    
    document.getElementById("p-cont1").style.visibility="visible";
    document.getElementById("p-cont1").style.position="relative";

    // 1.Array con 5 valores númericos fijos
    let numeros = [7,9,12,55,15];
    
    // 2.Array con elementos de diferente tipo fijos
    let datos = [1.5, true, "Jesús", {alto:100, ancho:300}];
    
    // 3.Array con valores que cambian en tiempo de ejecución
    // Primero creamos una variable
    let valor = 500;
    // Despues creamos el Array variable
    let mas_numeros =[valor, valor+100, valor+200];
    
    // 4.Array que contiene otros arrays
    // 4.1.Ejemplo 
    let conjuntoArrays = [numeros, datos, mas_numeros];
    // 4.2.Ejemplo 
    let mas_datos = [[7, {color:"rojo", potencia:500}], [15, {nombre:"Jesús", apellido:"Garcia"}]];
    
    // Acceder a los elementos de un Array
    console.log("Arrays literales");
        
    // Ejemplo 1
    document.getElementById("code").innerHTML="document.getElementById('code').innerHTML=numeros[2];";
    document.getElementById('codigo').innerHTML=numeros[2];
    
    // Ejemplo 2
    //  Vamos a añadir un dato más a este Array
    datos[4]="Garcia";
    datos[5]="Seijas";
    // Usando un bucle for
    for(let i=0;i<datos.length;i++){
    console.log(datos[i]);
    }
    document.getElementById("codigo2").innerHTML="Presiona f12 para ver resultado.";
    
    // Ejemplo 3
    //Usando un bucle for vamos a conocer los distintos valores de los datos
    for(let j = 0; j < mas_numeros.length; j++){
        console.log(mas_numeros[j]);
    }

    // vamos a mostrar el valor de la posición 2
    document.getElementById("codigo3").innerHTML=mas_numeros[2];
    
    // Ejemplo 4
    document.getElementById("code4").innerHTML="document.getElementById('codigo4').innerHTML=conjuntoArrays[2];";
    document.getElementById('codigo4').innerHTML=conjuntoArrays[2];
    
    // Ejemplo 5
    document.getElementById("code5").innerHTML="document.getElementById('codigo4').innerHTML=mas_datos[1];";
    document.getElementById('codigo5').innerHTML=mas_datos[1];
    console.log(mas_datos[1]);
}

// Con operador spread

function creArray2(){
    
    document.getElementById("p-cont2").style.visibility="visible";
    document.getElementById("p-cont2").style.position="relative";
    // Vamos a meter econtenido de numeros dentro de datos
    
    // Tenemos los 2 arrays
    let numeros = [7,9,12,55,15];
    
    // 1º Eliminamos un elemento true del array datos 
    // 2º añadimos el operador spread en la posicion donde antes estaba true
    // 3º Despues de los ... de spread añadimos el nombre del array que deseamos añadir
    let datos = [1.5, ...numeros, "Jesús", {alto:100, ancho:300}];
    
    console.log("Con operador spread");
    // Usando un bucle for
    for(let i=0;i<datos.length;i++){
        console.log(datos[i]);
    }
    // El resultado nos tiene que aparecer los elementos de numeros dentro de datos
    document.getElementById("codigo6").innerHTML="Presiona f12 para ver resultado.";
    document.getElementById("codigo6").style.color="lime";
    
    // Vamos a copiar Arrays
    
    // Tenemos un array
    let numeros2 = [7,9,12,55,15];

    // Con "spread" vamos a realizar una copia
    // Primero poniendo el operador y despues el nombre del array a copiar
    let copia_numeros = [...numeros2];

    // Para comprobar que son independientes vamos a modificar ambos arrays
    numeros2[0]=21;
    copia_numeros[0]=99;

    // Vamos a recorrer los arrays con 2 bucles for.
    for(let k=0; k<numeros2.length; k++){
         console.log(numeros2[k]);
    }

    console.log("-------------------------");

    for(let l=0; l<copia_numeros.length; l++){
         console.log(copia_numeros[l]);
    }

    document.getElementById("codigo7").innerHTML=("Presiona f12 para ver resultado.");
    document.getElementById("codigo7").style.color="pink";
    
    // Desmenuzar elementos de texto dentro de un array para comprobar contraseñas usuarios etc..
    
    // Array con una sola posición. 
    let nombre = ["Jesús Luis Garcia Seijas"];
    console.log(nombre);
    
    // Con spread convertimos cada caracter del "string" en una posición dentro del array.
    let nombre2 = [..."Jesús Luis Garcia Seijas"];
    console.log(nombre2);

    for(let m=0; m<nombre2.length; m++){
        console.log(`nombre2[${m}] => `+nombre2[m]);
   }
    
    document.getElementById("codigo8").innerHTML='El array "nombre" tiene '+nombre.length+ " posiciones.";
    document.getElementById("codigo9").innerHTML='El array "nombre2" tiene '+nombre2.length+ " posiciones.";
    document.getElementById("codigo10").innerHTML=("Presiona f12 para ver resultado.");
    document.getElementById("codigo8").style.color="pink";
    document.getElementById("codigo9").style.color="pink";
    document.getElementById("codigo10").style.color="lime";

    }

// Con constructor Array()
// Con métodos of() y from()