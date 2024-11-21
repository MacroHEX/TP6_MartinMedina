document.getElementById("submitName").addEventListener("click", function () {
    const name = document.getElementById("userName").value;
    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
    } else {
        document.getElementById("greeting").textContent = `¡Hola, ${name}! Bienvenido a la página.`;
    }
});

// Mensaje de bienvenida
const welcomeMessage = document.getElementById("welcomeMessage");
welcomeMessage.textContent = "Esperamos que disfrutes navegando por nuestras páginas.";
