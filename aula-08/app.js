// ***************** AULA 08 ********************

var carta1 = {
    nome: "Bulbasauro",
    imagem: "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  }
  
  var carta2 = {
    nome: "Dart Vader",
    imagem: "https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  }
  
  var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
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
    
    exibirCartaJogador()
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
      divResultado = "<p class='resultado-final'>Venceu</p>"
    } else if(valorCartaJogador < valorCartaMaquina) {
      divResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
      divResultado = "<p class='resultado-final'>Empatou</p>"
    }
    
    elementoResultado.innerHTML = divResultado;
    
    exibirCartaMaquina()
  }

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
  
} 

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for(var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

// ***************** DESAFIOS ********************

// 01 - Criar de fato um baralho, com várias outras cartas

// 02 - Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa

// 03 - Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros

// 04 - Utilizar seus personagens e jogos preferidos nesse projeto