//cria a variável que conta os cliques
let cliques = 0; 
//acessa a parte do texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML"); 

//cria a função para contar o clique
function contador() {    
    
    //aumenta em 1 o valor da variável
    cliques++; 

    //altera o valor do html para mostrar a váriavel cliques
    mostraHTML.innerHTML = `<p> Número de cliques: ${cliques}</p>`; 
    //console.log(cliques);
}

function zerador(){
    cliques = 0;
    mostraHTML.innerHTML = `<p> Número de cliques: ${cliques}</p>`; 
}