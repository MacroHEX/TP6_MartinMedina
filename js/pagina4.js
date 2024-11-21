emailjs.init("ctBrlAzkMU_koqJc7");

document.getElementById("messageForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        emailjs.send('service_ksh09hc', 'template_a42fm0a', {
            name,
            surname,
            phone,
            email,
            message
        })

        alert(`Gracias, ${name}. Tu mensaje ha sido enviado exitosamente.`);
        this.reset();
    } catch (error) {
        console.error("Error al enviar formulario:", error);
        alert("No se pudo enviar el correo.");
    }
});

document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("messageForm").reset();
    alert("Formulario limpiado.");
});
