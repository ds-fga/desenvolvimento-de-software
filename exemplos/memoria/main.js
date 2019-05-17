let estado = {
  flipouCarta: false,
  primeiraCarta: null,
  segundaCarta: null,
};

function jogo(event) {

  const cartaAtual = $(event.target);

  cartaAtual.toggleClass("costas");

  if(!estado.flipouCarta) { // primeiro click para tentar achar o par
    estado.flipouCarta = true;
    estado.primeiraCarta = cartaAtual;
  }
  else { // segundo click para tentar achar o par
    estado.flipouCarta = false;
    estado.segundaCarta = cartaAtual;
    console.log(estado.flipouCarta, estado.segundaCarta);
    
    if(estado.primeiraCarta.data("tipocarta") === estado.segundaCarta.data("tipocarta")) {
      console.log("iguais");
      estado.primeiraCarta.off('click', jogo);
      estado.segundaCarta.off('click', jogo);
    }
    else {
      estado.primeiraCarta.addClass("costas");
      estado.segundaCarta.addClass("costas");
      console.log('oi');
    }
  }

}

$(() => {

  $(".cartao").on("click", jogo);
});
