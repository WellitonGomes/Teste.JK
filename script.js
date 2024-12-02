const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//gerando um número aleatório entre 1 e 100

function verificar() { //função para verificar o numero do usuario
    const guess = parseInt(document.getElementById("guess").value);
    //pega o valor digitado pelo usuario e converte para inteiro 
    const resultado = document.getElementById("resultado");
    //pega a div com o valor digitado
    const botaoReiniciar = document.getElementById("reiniciar");

    if (isNaN(guess)) { //if para caso não seja digitado um numero 
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    //if para verificar o numero digitado 
    if (guess === numeroAleatorio) {
        //se o valor for o mesmo mostra a mensagem 
        resultado.textContent = "Parabéns! Você acertou!";
    //se o valor não estiver correto mostra estas mensagens dizendo se o numero é maior ou menor do que o que foi inserido
        // Exibe o botão de reiniciar
        botaoReiniciar.style.display = "block";
        
    } else if (guess < numeroAleatorio) {
        resultado.textContent = "Tente novamente! O número é maior.";
    } else {
        resultado.textContent = "Tente novamente! O número é menor.";
    }
}

//função para reiniciar o jogo 
function reiniciarJogo() {
     location.reload(); // Recarrega a página para reiniciar o jogo 
}
