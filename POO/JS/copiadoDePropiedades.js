// Copiado de propiedades

let p1={nombre:"Jesús", edad:52};

// Objeto  cuyas propiedades  y valores van a ser copiados.
let coche={color:"rojo",potencia:400,propietario:p1};

coche["pasajeros"]=5;

// Creamos el objeto que recibe la copia de propiedades y sus valores.
let furgoneta={carga:3500};

// Metodo 1. Mediante un bucle "for...of" y el metodo de Object ".keys()".
/*for(let clave of Object.keys(coche)){

    furgoneta[clave]=coche[clave];
}*/

// Metodo 2. Utilizando el metodo "assign()"
Object.assign(furgoneta,coche);

console.log(furgoneta);