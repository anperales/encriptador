const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage= "none";
    document.getElementById("alerta-sin-texto").style.visibility= "hidden";
    document.getElementById("copiar").style.visibility="visible";
}

function encriptar(textoEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
    textoEncriptar = textoEncriptar.toLowerCase();
    for(let contador = 0; contador < matrizCodigo.length; contador ++){
        if(textoEncriptar.includes(matrizCodigo[contador][0])){
            textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[contador][0], matrizCodigo[contador][1]);
        }
    }
    return(textoEncriptar);
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value= textoDesencriptado;
    textArea.value = "";
    

}
function desencriptar(textoDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
    textoDesencriptar = textoDesencriptar.toLowerCase();
    for(let contador = 0; contador < matrizCodigo.length; contador ++){
        if(textoDesencriptar.includes(matrizCodigo[contador][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[contador][1], matrizCodigo[contador][0]);
        }
    }
    return(textoDesencriptar);
}

function copiar(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); //Para dispositivos móviles
    navigator.clipboard.writeText(mensaje.value);
    alert("El mensaje ha sido copiado");

}
