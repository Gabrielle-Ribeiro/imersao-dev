// ************* AULA 02 *************

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  
  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
  
  // ************* DESAFIOS *************
  
  // 1) Adicionar botões de converter para real e converter para euro
function ConverterDolarEuro(moeda) {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  
  if(moeda == "dolar"){
    var valorConvertido = valorEmRealNumerico / 5;
    var simboloMoeda = "U$"  
  } else {
    var valorConvertido = valorEmRealNumerico / 5.12;
    var simboloMoeda = "€"    
  }

  valorBitcoin = valorEmRealNumerico / 101820
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var ResultadoValorConvertido = "O resultado em " + moeda + " é " + simboloMoeda + " " + valorConvertido.toPrecision(02);
  elementoValorConvertido.innerHTML = ResultadoValorConvertido;

  // 4) Adicionar linha de saída com conversão para bitcoin
  var elementoValorConvertidoBitcoin = document.getElementById("valorBitcoin");
  var ResultadoValorBitcoin = "O resultado em Bitcoin é " + valorBitcoin + " Bitcoins"
  elementoValorConvertidoBitcoin.innerHTML = ResultadoValorBitcoin;
}  
  
// 2) Fazer conversor de km para anos-luz
function ConverteDistancia() {
  var distanciaEmKm = 384400
  var distanciaEmAnosLuz = distanciaEmKm / 9.461e12
  console.log("A distancia " + distanciaEmKm + "Km corresponde a " + distanciaEmAnosLuz + " anos luz.")
}

//ConverteDistancia()

// 3) Conversor de temperatura

function ConverteTemperatura() {
  var temperaturaCelsius = 30
  var temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32
  console.log("A temperatura " + temperaturaCelsius + "°C em Fahrenheit é " + temperaturaFahrenheit + "F.")
}

//ConverteTemperatura()