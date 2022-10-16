/*

OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo
da aba que foi clicada pelo usuário e esconder o da aba anterior.


*/

//  passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll('.aba')


abas.forEach(aba => {
    //passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
            // se a aba selecionada já tiver a classe 'selecionado'
            // já retorna daqui, p ñ ficar fazendo cod q ñ precisa
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba){ // o nome desse parametro pode ser qualqr um
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada

    const abaSelecionada = document.querySelector(".aba.selecionado")
    // pega só o elemento que tem as duas classes ao mesmo tempo "aba selecionado"

    abaSelecionada.classList.remove("selecionado")
    // classList lista as classes da aba, no caso 'aba' e 'selecionado'
    // remove tira a opção 'selecionado' do html
    // daí desaplica as config do css

    // passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")

}

function mostrarInformacoesDaAba(aba){
    // passo 5 - esconder o conteúdo anterior

    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInfoDaAba = `informacao-${aba.id}` 
    // junta o texto informacao- (+) o id da aba
    // como tá la no html 'informacao-minhas-redes' e outros

    const informacaoDaAbaASerMostrada = document.getElementById(idDoElementoDeInfoDaAba)
    informacaoDaAbaASerMostrada.classList.add("selecionado")


}