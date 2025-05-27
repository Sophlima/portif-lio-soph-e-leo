var nota1 = Number(window.promt("Digite sua nota: "));
var nota2 = Number(window.promt("Digite sua nota 2: "));
var nota3 = Number(window.promt("Digite sua nota 3: "));

let total = (nota1 + nota2 + nota3)/3;

alert("media final: " + total);

if(total >= 60){
    alert("Você atingiu a média " + total);
    alert("Aprovado");
} else {
    pontosFaltando = 60 - total;
    alert("Reprovado, faltatam " + pontosFaltando + " pontos");
}