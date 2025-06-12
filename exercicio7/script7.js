//acessa a parte do texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML"); 

let numero = 0;

function aleatorio(){
    
    numero = parseInt (Math.random() * 101);

    mostraHTML.innerHTML += `<p>Pensei no número ${numero}!</p>`;
}

function zerador(){
      
    mostraHTML.innerHTML = nu11;

}