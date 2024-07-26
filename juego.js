// variables
let numerosecreto = Math.floor(Math.random()*10)+1  ;
let numerodejugador = 0;
let intentos = 1;
while (numerodejugador != numerosecreto){
numerodejugador = prompt("Indicame un número por favor entre el 1 y el 10 por favor:");

console.log(numerodejugador);

if (numerodejugador == numerosecreto){
    // se cumple la condicion
    // comillas invertidas
    alert(`Acertaste el numero. Lo hiciste en ${intentos} intentos`);
}else{
    if(numerodejugador > numerosecreto){
        alert('El numero es menor');
    }else{
        alert('El numero es mayor');
    }
    // cuando no acierta se suma 1 intento
    intentos++ ;
    if (intentos > 3 ){
        alert ("No tienes mas intentos");
        // break para salirme del while
        break;
    }

    
    // no se cumple la condicion
    // alert(`No acertaste, el numero era el ${numerosecreto}`)
}
}









// document.getElementById("boton").addEventListener("click",iniciar)