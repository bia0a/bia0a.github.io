function checkPassword() {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "Turing") {  // Defina a senha correta
        document.getElementById("container").style.display = "none";
        document.getElementById("secret-content").style.display = "block";
        errorMessage.innerText = "";
    } else {
        errorMessage.innerText = "Senha incorreta. Tente novamente.";
    }
}

function revealText(id) {
    if (id === 'A') {
        document.getElementById("messageA").style.display = "block";
    }
}

function accessTransmission() {
    document.getElementById("secret-content").style.display = "none";
    document.getElementById("transmission").style.display = "block";
}
