let estado = {
  cartas: null,
  flipouCarta: false,
  primeiraCarta: null,
  segundaCarta: null,
  aguardandoFimDaRodada: false,
};

$(() => {
  estado.cartas = $(".cartao");
  estado.cartas.on("click", main);
  embaralhaCartas();
});

function main(event) {
  
  if(estado.aguardandoFimDaRodada) return;
  
  const cartaAtual = $(event.target);
  cartaAtual.removeClass("costas");
  
  if(!estado.flipouCarta) // primeiro click para tentar achar o par
    selecionaPrimeiraCartaDoPar(cartaAtual);
  else {
    selecionaSegundaCartaDoPar(cartaAtual);
    checaPorMatch();
  }

  checaSeTerminou();
}

function checaSeTerminou() {
  const cartasNaoViradas = $(".cartao.costas");

  if(!cartasNaoViradas.length) {
    setTimeout(() => {
      $(".tabuleiro").html("<h1 class='msg-vitoria texto-chamativo'>Que memória de elefante a sua!</h1>");
    }, 500);
  }
}

function embaralhaCartas() {
  estado.cartas.map(i => {
    let posicaoRandom = Math.floor(Math.random() * 12); // gera um numero de 1 a quantidade de cartas(12)
    estado.cartas.eq(i).css("order", posicaoRandom); // propriedade 'order' define a posição da carta com base no numero rand gerado
  })
}

function selecionaPrimeiraCartaDoPar(cartaAtual) {
  estado.flipouCarta = true;
  estado.primeiraCarta = cartaAtual;
  estado.primeiraCarta.off("click", main); // não responde ao click, para evitar um match com ela mesma
}

function selecionaSegundaCartaDoPar(cartaAtual) {
  estado.segundaCarta = cartaAtual;
}

function checaPorMatch() {
  if(estado.primeiraCarta.data("tipocarta") === estado.segundaCarta.data("tipocarta"))
    desabilitaOPar();
  else
    desviraOPar();
}

function desabilitaOPar() {
  estado.primeiraCarta.off("click", main);
  estado.segundaCarta.off("click", main);
  resetaEstado();
}

function desviraOPar() {

  estado.aguardandoFimDaRodada = true;

  setTimeout(() => {
    estado.primeiraCarta.addClass("costas");
    estado.primeiraCarta.on("click", main); // volta a responder ao click, já que não achou o par
    estado.segundaCarta.addClass("costas");
    resetaEstado();
  }, 800)
}

function resetaEstado() {
  estado.flipouCarta = false;
  estado.aguardandoFimDaRodada = false;
  estado.primeiraCarta = null;
  estado.segundaCarta = null;
}