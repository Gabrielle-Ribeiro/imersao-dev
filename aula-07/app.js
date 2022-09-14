// ***************** AULA 07 ********************

var carta1 = {
    nome: "Bulbasauro",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  }
  
  var carta2 = {
    nome: "Dart Vader",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  }
  
  var carta3 = {
    nome: "Shiryu de dragão",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  }
  
  var cartas = [carta1, carta2, carta3]
  var cartaMaquina = 0
  var cartaJogador = 0
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    
    while(numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3)
    }
    
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    
    exibirOpcoes()
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    
    for(var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    
    for (var i = 0; i < radioAtributos.length; i++) {
      if(radioAtributos[i].checked == true) {
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if(valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu"
    } else if(valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior"
    } else {
      elementoResultado.innerHTML = "Empatou"
    }
  }
  
  // ***************** DESAFIOS ********************
  
  // 1 - Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
  
  // 2 - Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
  
  // 3 - Adicionar a imagem do personagem assim que você selecionar a carta dele
  