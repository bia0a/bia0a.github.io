function accessPlayerPage() {
  const passwordInput = document.getElementById("player-password").value.trim().toLowerCase();
  const errorMessage = document.getElementById("error-message");

  // Usa switch case para verificar o nome inserido e redirecionar para a página correspondente
  switch (passwordInput) {
      case "novak moldovan":
          window.location.href = "novak-moldovan.html";
          break;
      case "julius Petrov":
          window.location.href = "julius.html";
          break;
      case "andreas frança":
          window.location.href = "andreas-franca.html";
          break;
      case "fred remington":
          window.location.href = "fred-remington.html";
          break;
      case "George remington":
            window.location.href = "George-remington.html";
            break;
      default:
          errorMessage.innerText = "Nome incorreto. Tente novamente.";
          break;
  }
}
