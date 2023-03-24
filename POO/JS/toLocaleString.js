// Metodo para objetos toLocaleString

// Creamos un objeto y añadimos el método "toString" para mostrar en pantalla.
function ToString(){
    // Ejemplo 1.
    let empleado={
        Nombre:"Jesús",
        Apellido:"García",
        Edad:52,
        NumeroEmpleado:57059,
        SalarioBase:184000,
        toString:function(){
            return "Nombre: "+this.Nombre+"<br>"+ "Apellido: "+this.Apellido+"<br>"+
            "Edad: "+this.Edad+"<br>"+"Número de Empleado: "+this.NumeroEmpleado+"<br>"+
            "Salario base anual: "+this.SalarioBase;
        }
    };
    
    console.log(empleado);
    document.getElementById("codigo").innerHTML=(empleado.toString());

    // Ejemplo 2.
    let fecha=new Date(2023,03,24);

    document.getElementById("codigo3").innerHTML=fecha;

}

// Creamos un objeto y añadimos el método "tolocaleString" para mostrar en pantalla.
function ToLocaleString(){
    // Ejemplo 1
    let empleado={
        Nombre:"Jesús",
        Apellido:"García",
        Edad:52,
        NumeroEmpleado:57059,
        SalarioBase:184000,
        toLocaleString:function(){
            return "Nombre: "+this.Nombre.toLocaleString()+"<br>"+ "Apellido: "+this.Apellido.toLocaleString()+"<br>"+
            "Edad: "+this.Edad.toLocaleString()+"<br>"+"Número de Empleado: "+this.NumeroEmpleado.toLocaleString()+"<br>"+
            "Salario base anual: "+this.SalarioBase.toLocaleString();
        }
    };
    
    console.log(empleado);
    document.getElementById("codigo2").innerHTML=(empleado.toLocaleString());

    // Ejemplo 2.
    let fecha=new Date(2023,03,24);

    document.getElementById("codigo4").innerHTML=fecha.toLocaleString();
}