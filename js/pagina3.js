emailjs.init("ctBrlAzkMU_koqJc7");

document.getElementById("personalForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    try {
        emailjs.send('service_ksh09hc', 'template_a42fm0a', {
            name,
            surname,
            age,
            address,
            phone,
            email,
            city,
            country
        })

        alert("Formulario enviado exitosamente.");
        this.reset();
    } catch (error) {
        console.error("Error al enviar formulario:", error);
        alert("No se pudo enviar el correo.");
    }
});

document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("personalForm").reset();
    alert("Formulario limpiado.");
});
