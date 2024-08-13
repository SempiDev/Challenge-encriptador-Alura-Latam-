

//Funcion para encriptar texto
function encriptar (){
   let texto = document.getElementById("textoUsuarioId").value;
   texto = texto
    .replace(/a/gi,"ai",)
    .replace(/e/gi,"enter",)
    .replace(/i/gi,"imes",)
    .replace(/o/gi,"ober",)
    .replace(/u/gi,"ufat",)
document.getElementById("mensajeEncriptadoFinal").textContent = texto;

}
//Llamar la funcion encriptar al usar el boton encriptar
let botonEncriptar = document.getElementById("botonEncriptarId").value;
 botonEncriptarId.onclick = function(){
    encriptar()
 }

//Funcion para validar que el texto este en minusculas y no tenga caracteres especiales 
let boton = document.getElementById("botonEncriptarId");
botonEncriptarId.onclick = function() {
    if (document.getElementById("textoUsuarioId").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else{
        alert("Solo puedes ingresar letras minusculas y sin caracteres especiales");
        
    }
}
//Funcion para desencriptar
function desencriptar(){
    let textoEncriptado = document.getElementById("mensajeEncriptadoFinal").textContent;
    textoEncriptado= textoEncriptado
    .replace(/imes/gi,"i",)
    .replace(/ai/gi,"a",)
    .replace(/enter/gi,"e",)
    .replace(/ober/gi,"o",)
    .replace(/ufat/gi,"u",)
    console.log(textoEncriptado);
    document.getElementById("textoUsuarioId").value = textoEncriptado;
    }  
    

//Llamar la funcion desencriptar al usar el boton desencriptar
let botonDesencriptar = document.getElementById("botonDesencriptarId");
    botonDesencriptar.onclick = function(){
     desencriptar();
 };
 
//Funcion para copiar el texto encriptado
function copiar(){
    navigator.clipboard.writeText(
        document.getElementById("mensajeEncriptadoFinal").textContent,
    );
    document.getElementById("botonCopiarId").addEventListener ("click",copiar);

}