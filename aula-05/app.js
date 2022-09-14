// ************* AULA 05 *************

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    if(filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito)
    } else {
      console.error("Endereço de filme inválido.")
    }
    
    document.getElementById("filme").value = ""
  }
  
  function listarFilmesNaTela(filme) {
        var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"
      var elementoListaFilmes = document.getElementById("listaFilmes")
    
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
  } 
  
  
  // ************* DESAFIOS *************
  
  // 1 - Botão de remover filme
  
  // 2 - Colocar nome do filme embaixo
  
  // 3 - Guardar em uma lista os filmes que foram adicionados
  
  // 4 - Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo