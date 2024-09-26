// Função para enviar a mensagem do usuário e gerar a resposta do bot
function enviarMensagem() {
    const inputField = document.getElementById('userInput');
    const mensagem = inputField.value;

    if (mensagem.trim() === "") {
        return; // Se o usuário não digitar nada, não faz nada
    }

    // Exibe a mensagem do usuário na tela
    adicionarMensagemUsuario(mensagem);

    // Gera a resposta do bot com base na mensagem do usuário
    const resposta = gerarResposta(mensagem);

    // Exibe a resposta do bot na tela
    adicionarMensagemBot(resposta);

    // Limpa o campo de entrada
    inputField.value = "";
}

// Função para gerar a resposta do chatbot com base na mensagem
function gerarResposta(mensagem) {
    const mensagemFormatada = mensagem.toLowerCase();

    if (mensagemFormatada.includes("olá") || mensagemFormatada.includes("oi")) {
        return "Olá! Como posso te ajudar hoje?";
    } else if (mensagemFormatada.includes("tudo bem") || mensagemFormatada.includes("como você está")) {
        return "Estou bem, obrigado por perguntar!";
    } else if (mensagemFormatada.includes("nome")) {
        return "Meu nome é ChatBot!";
    } else if (mensagemFormatada.includes("adeus") || mensagemFormatada.includes("tchau")) {
        return "Adeus! Até logo!";
    } else {
        return "Desculpe, não entendi sua pergunta. Pode reformular?";
    }
}

// Função para adicionar a mensagem do usuário no chat
function adicionarMensagemUsuario(mensagem) {
    const chatbox = document.getElementById('chatbox');
    const novaMensagem = document.createElement('div');
    novaMensagem.className = 'user-message';
    novaMensagem.textContent = mensagem;
    chatbox.appendChild(novaMensagem);
    chatbox.scrollTop = chatbox.scrollHeight; // Rola para o final do chat
}

// Função para adicionar a resposta do bot no chat
function adicionarMensagemBot(resposta) {
    const chatbox = document.getElementById('chatbox');
    const novaResposta = document.createElement('div');
    novaResposta.className = 'bot-message';
    novaResposta.textContent = resposta;
    chatbox.appendChild(novaResposta);
    chatbox.scrollTop = chatbox.scrollHeight; // Rola para o final do chat
}
