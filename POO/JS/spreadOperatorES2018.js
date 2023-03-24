// spread operator ES2018

function mixer(){

    
    let coche={color:"rojo", potencia:400};
    
    let furgoneta={capacidad:"grande", autonomia:"extendida"};
    
    let suv={...coche,...furgoneta};
    

    console.log(coche);
    console.log(furgoneta);
    console.log(suv);
    document.getElementById("titulo").innerHTML="Vamos a juntar 2 objetos";
    document.getElementById("codigo").innerHTML=suv + "Presiona F12 para descubrirlo.";
}