// ************** AULA 01 **************
// Tópicos da Primeira Aula:
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação.

var nome = "Guilherme"
var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem-vindo " + nome)
console.log(notaFixada)

// ************** DESAFIOS **************

// 1) Quebrar a soma e divisão e mostrar se a pessoa foi aprovada

var somaNotaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre)
var novaNotaFinal = somaNotaFinal / 4

console.log("A sua nota final foi " + novaNotaFinal)

// 2) Estilizar a página trocando cor de fundo e imagem
// (Está nos outros códigos)

// 3) Escrever na página o que escrevemos no console

var elementoMensagem = document.getElementById("mensagem")
elementoMensagem.innerHTML = "Sua nota final é " + notaFixada

// 4) Criar conversor de temperaturas/moeda

var temperaturaCelsius = 30
var temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32
console.log("A temperatura " + temperaturaCelsius + "°C em Fahrenheit é " + temperaturaFahrenheit + "F.")

// 5) Imprimir a média usando as operações diretamente no console.log

console.log("A média é " + (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4)