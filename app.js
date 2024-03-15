//Constantes
const cuadroTexto = document.querySelector(".cuadroTexto")
const mensajeEncriptado = document.querySelector(".mensajeEncriptado")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat*/

function botonEncriptar(){
    const textoEncriptado = encriptar(cuadroTexto.value);
    mensajeEncriptado.value=textoEncriptado;
    cuadroTexto.value="";
    mensajeEncriptado.style.backgroundImage="none"
}



function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo [i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado

}

function botonDesencriptar (){
    const textoEncriptado = desencriptar(cuadroTexto.value);
    mensajeEncriptado.value=textoEncriptado;
    cuadroTexto.value="";
    mensajeEncriptado.style.backgroundImage="none"
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo [i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado

}

function copiar(){
    let copiar = mensajeEncriptado
    copiar.select ();
    document.execCommand("copy")
}