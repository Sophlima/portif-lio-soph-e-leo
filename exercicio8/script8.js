//acessa a parte do texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML"); 
let numero = 0;
let num_adiv = 0

function adiv(){
    let frase

    num_adiv = Number(window.prompt("Digite um número de 1 a 100"));

    numero = parseInt(Math.random() * 101);

    frase = mostraHTML.innerHTML += '<p>Você escolheu $(num_aidv).</p>'

    if(num_adiv > numero){
        mostraHTML.innerHTML = '<p>Você escolheu ${num_adiv}. Meu número é MENOR</p>'
    }else{
        mostraHTML.innerHTML = '<p>Você escolheu ${num_adiv}. Meu número é MAIOR</p>'
    }

    if (num_adiv <= numero){
        mostraHTML.innerHTML = '<p>Parábens você ganhou!</p>'
    }
}
