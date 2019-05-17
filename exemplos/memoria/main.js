let estado = {
  flipouCarta: false,
  primeiraCarta: null,
  segundaCarta: null,
};

function main(event) {

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
    viraOPar()    
}

function desabilitaOPar() {
  estado.primeiraCarta.off('click', main);
  estado.segundaCarta.off('click', main);
}

function viraOPar() {
  setTimeout(() => {
    estado.primeiraCarta.addClass("costas");
    estado.segundaCarta.addClass("costas");
  }, 800)
}

$(() => {

  $(".cartao").on("click", main);
});
