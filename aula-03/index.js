// ************** AULA 03 **************

var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value)

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!"
    console.log("acertou")
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"
  } else {
    elementoResultado.innerHTML = "Você errou!!"
  }
}

// ************** DESAFIOS **************
  
// 1) Adicionar número de tentativas e após essa quantidade de tentativas mostrar o número secreto
  
// 2) Quando a pessoa errar, dar dica de se o número secreto é maior ou menor do que o chute
  
// 3) Pesquisar sobre a diferença entre == e ===
