let resposta1 = document.getElementById("respost1"); 
let resposta2 = document.getElementById("respost2"); 
let resposta3 = document.getElementById("respost3"); 
let mensagem = document.getElementById("mensagem");

// função que verifica se a resposta clicada é a certa
function verificar(respostaClicada) {
    if (respostaClicada === resposta2) { // resposta2 é a correta
        mensagem.textContent = "Certa resposta!";
    } else {
        mensagem.textContent = "Errou!";
    }
}

// adiciona evento de clique em cada botão
resposta1.addEventListener("click", function() { verificar(resposta1); });
resposta2.addEventListener("click", function() { verificar(resposta2); });
resposta3.addEventListener("click", function() { verificar(resposta3); });


