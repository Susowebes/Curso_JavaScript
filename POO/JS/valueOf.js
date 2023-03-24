// Metodo para objetos valueOf()

function ValueOf(){
    // Creamos una fecha.
    let fecha=new Date(2023,03,24);

    // Con "valueOf()" averiguamos cual es su valor.
    console.log(fecha);
    console.log(fecha.valueOf());
    document.getElementById("titulo").innerHTML="Con una fecha (2023,03,24):"
    document.getElementById("codigo").innerHTML=fecha.valueOf();
    
    // Creamos un string.
    let curso=new String("Curso de JavaScript");
    
    // Con "valueOf()" averiguamos cual es su valor.
    console.log(curso);
    console.log(curso.valueOf());
    document.getElementById("titulo2").innerHTML='Con un "String":'
    document.getElementById("codigo2").innerHTML=curso;
}