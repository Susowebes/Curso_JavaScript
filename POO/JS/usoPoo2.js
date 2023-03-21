/*
// Metodo 1. "Forma literal"
//Creamos un objeto con 2 propiedades.
// let coche={color:"rojo",potencia:400};

console.log(coche);

// Metodo 2. "Usando new"
// Usando el metodo "new" y vamos a usar contructores de clases predefinidas. 

// Ejemplo 1:
let mi_Array=new Array();

// Ejemplo 2:
let mi_Map=new Map();

// Ejemplo 3:
let mi_objeto=new Object();

console.log(mi_Array);
console.log(mi_Map);
console.log(mi_objeto);

// Metodo 3. "Usando create"
// Usando el metodo "create" perteneciente a la clase "Objet". 
let coche=Object.create({color:"rojo",potencia:400});

console.log(coche);
*/

// Vamos a acceder o modificar las propiedades del objeto de 2 formas diferentes.
let coche={color:"rojo",potencia:400};

// Primera: Usando la nomenglatura del punto.
coche.color="Azul";

document.getElementById("codigo").innerHTML=coche.color;

// Segunda: Mediante un Array asociativo. Tambien se pueden crear propiedades nuevas.
coche["pasajeros"]=5;
document.getElementById("codigo2").innerHTML=coche["potencia"];

//Ejemplo práctico.

for(let i=0; i<5; i++){

    coche[`cilindrada${i}`]=2000+(i*100)+ " cc";
}
console.log(coche);