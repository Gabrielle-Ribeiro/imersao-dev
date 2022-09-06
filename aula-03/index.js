// ************** AULA 03 **************

var numeroSecreto = parseInt(Math.random() * 11)
var quantidadeTentativas = 3
var tentativa = 1

function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var elementoDica = document.getElementById("dica")
  var chute = parseInt(document.getElementById("valor").value)
  var acertou = false

  if(tentativa <= quantidadeTentativas){  
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Tentativa " + tentativa + "/" + quantidadeTentativas + "\nVocê acertou!"
      elementoDica.innerHTML = ""
      tentativa = quantidadeTentativas + 1
      acertou = true
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"
      elementoDica.innerHTML = ""
    } else {
      elementoResultado.innerHTML = "Tentativa " + tentativa + "/" + quantidadeTentativas + "\nVocê errou!!"
      tentativa++
      if(chute < numeroSecreto) {
        elementoDica.innerHTML = "Seu chute foi menor que o número secreto"
      } else {
        elementoDica.innerHTML = "Seu chute foi maior que o número secreto"
      }
    }
  } else {
    if (acertou) {
      elementoResultado.innerHTML = "Você já acertou. O número secreto era " + numeroSecreto
      elementoDica.innerHTML = ""
    } else {
      elementoResultado.innerHTML = "Você não possui mais tentativas. O número secreto era " + numeroSecreto
      elementoDica.innerHTML = ""
    }
  }

}

// ************** DESAFIOS **************
  
// 1) Adicionar número de tentativas e após essa quantidade de tentativas mostrar o número secreto
  
// 2) Quando a pessoa errar, dar dica de se o número secreto é maior ou menor do que o chute
  
// 3) Pesquisar sobre a diferença entre == e ===
// O == compara somente o conteúdo entre duas variáveis. Desse modo, a comparação a seguir retorna true.
// var num = 5
// var numString = "5"
// var comparacao = num == numString
// Já o === compara o conteúdo e o tipo entre duas variáveis. Desse modo, a comparação a seguir retorna false.
// var num = 5
// var numString = "5"
// var comparacao = num === numString