function accessPlayerPage() {
    const passwordInput = document.getElementById("player-password").value.trim().toLowerCase();
    const errorMessage = document.getElementById("error-message");

    // Mapeia os agentes válidos com os respectivos IDs no JSON
    const agentesValidos = {
        "novak moldovan": "novak-moldovan",
        "julius petrov": "julius-petrov",
        "andreas frança": "andreas-franca",
        "fred remington": "fred-remington",
        "george remington": "george-remington",
        "oliver graham": "oliver-graham",
        "thaddeus baker": "thaddeus-baker",
        "elias voss": "elias-voss", // Nome corrigido para minúsculas e com ID correto
        "s0m8r4": "elias-voss" // Permite que o jogador também acesse digitando "S0M8R4"
    };

    // Verifica se o nome digitado está na lista e redireciona
    if (agentesValidos[passwordInput]) {
        window.location.href = `agente.html?agente=${agentesValidos[passwordInput]}`;
    } else {
        errorMessage.innerText = "Nome incorreto. Tente novamente.";
    }
}


// Enigma de múltiplos cliques
var cliques = 0;

function contarCliques() {
    cliques++;

    if (cliques === 3) { 
        document.getElementById("dica").innerText = "Continue tentando... algo está prestes a acontecer.";
    }

    if (cliques === 5) {
        document.getElementById("mensagemMisteriosa").style.display = "block";
        document.getElementById("dica").innerText = "O caminho foi revelado.";
        document.getElementById("dica").style.cursor = "default"; // Remove a aparência de clique
    }
}

// Preenchimento automático da página do agente
document.addEventListener("DOMContentLoaded", function() {
    if (!document.getElementById("container")) return; // Evita rodar o código se a página não for agente.html

    // Obtém o nome do agente da URL
    const params = new URLSearchParams(window.location.search);
    const agenteID = params.get("agente");

    if (!agenteID) return; // Se não houver agente na URL, não faz nada

    fetch("agentes.json")
        .then(response => response.json())
        .then(data => {
            const agente = data[agenteID];

            if (!agente) {
                document.getElementById("container").innerHTML = "<h1>Erro</h1><p>Agente não encontrado.</p>";
                return;
            }

            // Preenche os dados na página do agente
            document.title = `Agente ${agente.nome}`;
            document.getElementById("nome").innerText = agente.nome;
            document.getElementById("status").innerText = agente.status;
            document.getElementById("missao").innerText = agente.missao;
            document.getElementById("objetivo").innerText = agente.objetivo;
            document.getElementById("informacao").innerText = agente.informacao;
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});
