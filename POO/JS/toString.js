// toString()

function cambioTexto(){

    let p1={nombre:"Jesús", edad:52};
    
    // let coche={color:"rojo",potencia:400,propietario:p1};

    /* Primero modificamos el objeto con .toString más una función anonima 
       con la cual mediante el metodo "return" pedimos que nos lo devuelva 
       más adelante. La instrución "this" hace referencia al objeto o clase 
       donde te encuentres. */
    let coche={color:"rojo",potencia:400,propietario:p1,toString:function(){
        return "El coche es de color: "+`${coche.color}`+" y tiene: "+`${this.potencia}`+" CVs";
        }
    };


    coche["pasajeros"]=5;
    
    let furgoneta={carga:3500};
    
    console.log(p1);
    console.log(coche);
    console.log(furgoneta);
    
    

    // Despues llamamos el objeto con la función "toString()"
    document.getElementById("codigo").innerHTML=coche.toString();
}

