const textInput = document.querySelector("#texto");
const outInput = document.querySelector("#output");


function criptografar(){

let texto = textInput.value;

  let resultCripto = texto.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function descriptografar(){

    const texto = textInput.value;

    const resultDescripto = texto.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u");
  
    
    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'}


function copiar() {
    let textoCop = document.getElementById('texto');
  
    
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    
}  