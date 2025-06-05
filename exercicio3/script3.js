let nome
let nota1 = Number(window.promt("Digite sua nota: "))
let nota2 = Number(window.promt("Digite sua nota 2: "))
let nota3 = Number(window.promt("Digite sua nota 3: "))
let pontosFaltando;


let total = (nota1 + nota2 + nota3)/3;

alura = "alura"

alert("media final: " + total)

if(total >= 60){
    alert("Você atingiu a média " + total)
    alert("Aprovado")
} else {
    pontosFaltando = 60 - total
    alert(nome + "Reprovado, faltatam " + pontosFaltando + " pontos, estuda ai: " + alura) 
}