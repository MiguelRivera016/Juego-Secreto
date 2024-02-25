let NumeroSecreto= 0;

let intentos =0;
let listaNumerosSorteados=[];  // Un arreglo para hacer que el juego no repita el numero secreto de manera seguida.
let numeroMaximo=10;


function asignarTextoElemento (elemento, texto){
    let titulo= document.querySelector(elemento);   //Devuelve el encabezado del html usando el document.
    titulo.innerHTML = texto;
    return;

}
//Anatomia de la funcion (Declaracion de Variable)

function VerificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('ValorUsuario').value); //Funcion parseInt, convierte los datos a números
   // console.log(typeof(numeroDeUsuario));   //Retorna el tipo de cadena que es(String, Boolean; Integer)
    
  
    console.log(intentos);
    if (numeroDeUsuario === NumeroSecreto) 
    {
        asignarTextoElemento ('p' , `Acertaste el numero secreto ${intentos} ${(intentos === 1) ? 'Vez':'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
        else {
            if (numeroDeUsuario > NumeroSecreto){
                asignarTextoElemento('p' , 'El numero secreto es menor');
            }
            else {
                asignarTextoElemento('p' , 'El numero secreto es mayor');
            }
            intentos++;
            LimpiarCaja();
        }
        

    return;

}

function LimpiarCaja (){
    let ValorCaja= document.querySelector('#ValorUsuario');
    ValorCaja.value= '';


}
function GenerarNumeroSecreto(){
    let NumeroSecreto= Math.floor(Math.random()* numeroMaximo)+ 1;
    console.log(listaNumerosSorteados);

    //si ya se sorteo todos los numeros.
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } 
    else{

        if (listaNumerosSorteados.includes(NumeroSecreto)){
            return GenerarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(NumeroSecreto);
            return NumeroSecreto;
        }
    }

}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('p', `Coloca un número del 1 al ${numeroMaximo}`);
    NumeroSecreto= GenerarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego(){
    // 1. Limpiar la caja.
    LimpiarCaja();

    // 2. Indicar intervalo de numeros.
    // 3. Generar numero aleatorio.
    // 5. Inicializar el numero de intentos.
    condicionesIniciales();
    // 4. Inhabilitar boton de nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');



}

condicionesIniciales();
