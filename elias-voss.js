function corruptText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let originalText = element.innerText;
    let corruptedText = originalText.split("").map(char => {
        if (/[a-zA-Z]/.test(char)) {
            return Math.random() > 0.5 ? char : String.fromCharCode(48 + Math.floor(Math.random() * 10)); // Substitui por número
        }
        return char;
    }).join("");

    element.innerText = corruptedText;

    setTimeout(() => {
        element.innerText = originalText; // Volta ao normal
        setTimeout(() => corruptText(elementId), 1000); // Inicia de novo
    }, 500);
}

function loadGlitchEffect() {
    setTimeout(() => {
        corruptText("nome");
        corruptText("status");
        corruptText("missao");
        corruptText("objetivo");
        corruptText("informacao");
    }, 1000);
}
