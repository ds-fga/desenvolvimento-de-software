let estado = {
  flipouCarta: false,
  primeiraCarta: null,
  segundaCarta: null,
  aguardandoFimDaRodada: false,
};

$(() => $(".cartao").on("click", main));

function main(event) {

  if(estado.aguardandoFimDaRodada)
    return;

  const cartaAtual = $(event.target);

  cartaAtual.toggleClass("costas");

  if(!estado.flipouCarta) // primeiro click para tentar achar o par
    selecionaPrimeiraCartaDoPar(cartaAtual);
  else {
    selecionaSegundaCartaDoPar(cartaAtual);
    checaPorMatch();
  }
}

function selecionaPrimeiraCartaDoPar(cartaAtual) {
  estado.flipouCarta = true;
  estado.primeiraCarta = cartaAtual;
}

function selecionaSegundaCartaDoPar(cartaAtual) {
  estado.flipouCarta = false;
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
}

function desviraOPar() {

  estado.aguardandoFimDaRodada = true;

  setTimeout(() => {
    estado.primeiraCarta.addClass("costas");
    estado.segundaCarta.addClass("costas");
    estado.aguardandoFimDaRodada = false;
  }, 800)
}