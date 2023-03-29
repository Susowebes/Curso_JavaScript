// spread operator ES2018

function mixer(){

    
    let coche={color:"rojo", potencia:400};
    
    let furgoneta={capacidad:"grande", autonomia:"extendida"};
    
    let suv={...coche,...furgoneta};
    

    console.log(coche);
    console.log(furgoneta);
    console.log(suv);
    document.getElementById("titulo").innerHTML="Spread operator ES2018";
    document.getElementById("codigo").innerHTML=suv + "Presiona F12 para descubrirlo.";
}

// Abreviatura de métodos

function calculoArea(){
    
    let triangulo={
        base: parseInt(prompt("Define la base del triangulo.")),
        altura: parseInt(prompt("Define la altura del triangulo")),

        // area:function(){return(this.altura*this.base)/2;}
        // Esto se puede abreviar con la nueva sintaxis
         area(){return(this.altura*this.base)/2;}

    }

    document.getElementById("titulo2").innerHTML="Abreviación";
    document.getElementById("codigo2").innerHTML="El Area del triangulo es " + triangulo.area();

}

// Propiedades de acceso "getter" & "setter" Lectura y escritura

function calculoArea2(){
    
    let triangulo={
        altura:15,
        base:12,
        // Con get declaras la nueva propiedad.
        get area(){ // Propiedad de lectura
            return(this.altura*this.base)/2
        },
        // Con set modificas la nueva propiedad.
        set area(nuevaBase){ // Propiedad de escritura
            this.base=nuevaBase;
        },
    }
    // Nuevo valor usado con set
    triangulo.area=100;
    document.getElementById("titulo3").innerHTML="Lectura y escritura";
    document.getElementById("codigo3").innerHTML="El Area del triangulo es " + triangulo.area;
     
}

// Propiedades de acceso "getter" & "setter" Lectura y escritura

    function cambioNombre(){
        let persona={
            nombre: "Jesús",
            apellido: "Garcia",
            get dameNombre(){
                return `${this.nombre} ${this.apellido}`;
            },
            set dameNombre(newName){
                [this.nombre, this.apellido]=newName.split(" ");
            },
        }
        persona.dameNombre="Jimena Garcia";
        document.getElementById("titulo4").innerHTML="Ejemplo de get y set";
        document.getElementById("codigo4").innerHTML=persona.dameNombre;
    }