document.addEventListener("DOMContentLoaded", function() {
    if (!document.getElementById("container")) return;

    const params = new URLSearchParams(window.location.search);
    const agenteID = params.get("agente");

    if (!agenteID) {
        document.getElementById("container").innerHTML = "<h1>Erro</h1><p>Agente não encontrado.</p>";
        return;
    }

    fetch("agentes.json")
        .then(response => response.json())
        .then(data => {
            const agente = data[agenteID];

            if (!agente) {
                document.getElementById("container").innerHTML = "<h1>Erro</h1><p>Agente não encontrado.</p>";
                return;
            }

            document.title = `Agente ${agente.nome}`;
            document.getElementById("nome").innerText = agente.nome;
            document.getElementById("status").innerText = agente.status;
            document.getElementById("missao").innerText = agente.missao;
            document.getElementById("objetivo").innerText = agente.objetivo;
            document.getElementById("informacao").innerText = agente.informacao;

            // Se for Elias Voss, inicia a corrupção de dados
            if (agenteID === "elias-voss") {
                loadGlitchEffect();
            }
        })
        .catch(error => {
            console.error("Erro ao carregar dados:", error);
            document.getElementById("container").innerHTML = "<h1>Erro</h1><p>Falha ao carregar os dados do agente.</p>";
        });
});
