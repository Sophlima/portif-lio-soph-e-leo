//acessa a parte do texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML"); 
let numero = 0;
let num1 = Number(window.prompt("Digite aqui o primeiro número:"));


function aleatorio(){
    
    numero = parseInt (Math.random() * 101);

    mostraHTML.innerHTML += `<p>Pensei no número..</p>`;
}


   if(num1 > numero){
    alert(num1 + " é maior que " + numero)
}