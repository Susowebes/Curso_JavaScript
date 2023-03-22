// Creamos un objeto "persona".
let persona={Nombre:"Jesús",Edad:52,Sexo:"Varon"};

//Creamos un objeto con 2 propiedades.
let coche={color:"rojo",potencia:400,propietario:persona};

// Mediante el punto añado una propiedad nueva a coche cuyo valor es otro objeto.
// coche.propietario=persona;


// Segunda: Mediante un Array asociativo. Creamos propiedades nuevas.
for(let i=0; i<5; i++){

    coche[`cilindrada${i}`]=2000+(i*100)+ " cc";
}
// Mediante propiedades encadenas puedes conocer sus valores.
document.getElementById("codigo").innerHTML=coche.color;
console.log(coche.color);
console.log(coche);

// Conocer el valor de la propiedad de un objeto dentro de un objeto.
document.getElementById("codigo2").innerHTML=coche.propietario.Edad;
console.log(coche.propietario);
console.log(coche.propietario.Nombre);

// Si ponemos una propiedad que no existe nos devuelve: "undefined"
document.write(coche.peso + "<br>");
console.log(coche.propietario.dinero);

// Para borrar una propiedad se usa "delete.objeto.propiedad".
// delete coche.propietario;
console.log(coche.propietario);
console.log(coche);

// Para averiguar si al borrar una propiedad no hay problemas se uas este metodo y no el anterior.
// Creando una variable la cual luego podemos comprobar si ha tenido exito.
let borradoTotal=delete coche.cilindrada0;
console.log(coche);

// Para comprobar si ha tenido exito comprobar la variable creada si sale "true" o "false".
console.log(borradoTotal); 

// Mediante "hasOwnProperty" puedes comprobar si esiste o no una propiedad.
console.log(coche.hasOwnProperty("cilindrada0")); 
console.log(coche.hasOwnProperty("cilindrada1")); 
console.log(coche.hasOwnProperty("cilindrada2")); 
console.log(coche.hasOwnProperty("cilindrada3")); 

// Como enumerar las propiedades que puede tener un objeto.
for(let p in coche){
    document.write(p + "<br>");
}