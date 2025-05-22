let num1;
let num2;
let resultado;
let parOUimpar;

num1 = Number(window.prompt("Digite aqui o primeiro número:"));
num2 = Number(window.prompt("Digite aqui o primeiro número"));  

resultado = num1 + num2;

parOUimpar = resultado % 2;

if(parOUimpar == 0 ) {
    alert("o número " + resultado + "é par");
} else {
    alert("o número " + resultado + "é ímpar");
}

/*if(resultado > 10) {
    alert("o número" + resultado + "é maior do que 10");
} else {
    alert("o número" + resultado + "é menor ou igual a 10");
}*/



