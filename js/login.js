emailjs.init("ctBrlAzkMU_koqJc7");

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        try {
            emailjs.send('service_ksh09hc', 'template_u55xy58', {
                username
            })
            alert("Bienvenido, " + username + "!");
            window.location.href = "pagina2.html";
        } catch (error) {
            console.error("Error al enviar correo:", error);
            alert("No se pudo enviar el correo.");
        }
    } else {
        alert("Contraseña incorrecta, inténtelo de nuevo.");
    }
});
