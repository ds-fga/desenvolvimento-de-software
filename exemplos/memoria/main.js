let estado = {
    selecionado: null,
};

$(() => {
    $(".cartao")
        .mouseenter(ev => {
            console.log("Mouse por cima do cartão");
        })
        .mouseleave(ev => {
            console.log("Mouse saiu do cartão");
        })
        .on("click", ev => {
            if (estado.selecionado === null) {
                //
            } else {
                $(ev.target).toggleClass('virado');
            }
        });
});
