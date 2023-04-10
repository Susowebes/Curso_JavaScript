// Vamos a crear Arrays.

// Mensaje de prueba
// alert("Hola que tal");

// Arrays literales

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
    function creArray(){
        document.getElementById("p-cont1").style.visibility="visible";

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
// Con constructor Array()
// Con métodos of() y from()