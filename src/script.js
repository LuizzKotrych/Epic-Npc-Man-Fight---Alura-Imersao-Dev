var bodger = {
  nome: "Bodger, The Blacksmith",
  imagem: "https://i.imgur.com/vk95iho.png",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

var baradun = {
  nome: "Baradun, The High Sorcerer",
  imagem: "https://i.imgur.com/pnasINx.png",
  vitorias: 10,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

var greg = {
  nome: "Greg, The Garlic Farmer",
  imagem: "https://i.imgur.com/M51GVwS.png",
  vitorias: 1,
  empates: 3,
  derrotas: 5,
  pontos: 0
}

var bob = {
  nome: "Bob. Yep, just Bob",
  imagem: "https://i.imgur.com/GPpykMt.png",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}


bodger.pontos = calculaPontos(bodger)
baradun.pontos = calculaPontos(baradun)
greg.pontos = calculaPontos(greg)
bob.pontos = calculaPontos(bob)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}
  
var jogadores = [bodger, baradun, greg, bob]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td><img src=\""+jogadores[i].imagem + "\"/></td>"
    html += "<td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
}
function adicionarEmpate(i) {
  console.log("clicou no botão empate")
  var jogador = jogadores[i]
  if (jogadores[i] == jogadores[0]) {
    var jogador2 = jogadores[1];
    var jogador3 = jogadores[1];
    var jogador4 = jogadores[1];
    
    }else {
      var jogador2 = jogadores[0];
      var jogador3 = jogadores[0];
      var jogador4 = jogadores[0];
      
    
    }
  
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  jogador2.empates++
  jogador2.pontos= calculaPontos(jogador)
  jogador3.empates++
  jogador3.pontos= calculaPontos(jogador)
  jogador4.empates++
  jogador4.pontos= calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)                                 
  
}
function adicionarDerrota(i) {
  console.log("clicou no botão derrota")
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
 
}

  
  
  

//Link para usar table opaccity (no CSS): //https://www.w3schools.com/cssref/css3_pr_opacity.asp //add background color também grey
//Linhas que mudei para as imagens funcionarem:
//html += "<tr><td><img src=\""+jogadores[i].imagem + "\"/></td>";
//adicionar string "imagem" abaixo do nome;
//No css, as duas ultimas form wrapper e ajustar a table com opacity 0.9 e bck black.
