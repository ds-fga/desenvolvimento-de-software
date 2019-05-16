let estado = {
  selecionado: null
};

$(() => {
  $(".cartao").on("click", ev => {
    $(ev.target).toggleClass("costas");
  });
});
