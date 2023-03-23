// Serializar 

function serializar(){

    let p1={nombre:"Jesús", edad:52};
    
    let coche={color:"rojo",potencia:400,propietario:p1};
    
    coche["pasajeros"]=5;
    
    let furgoneta={carga:3500};
    
    console.log(p1);
    console.log(coche);
    console.log(furgoneta);
    
    // Comvertimos a string un Objeto con el metodo "JSON.stringify()".
    let cocheSerializado=JSON.stringify(coche);
    
    // Mostramos con "F12" el texto en la consola. 
    console.log(cocheSerializado);
    
    // Convertimos a objeto un "String" mediante el metodo "JSON.parse()".
    // let cocheDeserializado=JSON.parse(cocheSerializado);
    coche=JSON.parse(cocheSerializado);
    
    // Mostramos con "F12" el Objeto en la consola.
    // console.log(cocheDeserializado);
    console.log(coche);

    // Imprimimos el "String" en la pantalla.
    document.getElementById("codigo").innerHTML=cocheSerializado;
}
// document.write(cocheSerializado);

