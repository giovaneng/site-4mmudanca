document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-contato");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const formData = {
            nome: form.nome.value,
            email: form.email.value,
            celular: form.celular.value,
            assunto: form.assunto.value,
            mensagem: form.mensagem.value
        };

        fetch("http://localhost:8080/api/formulario/form2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário");
            }
            return response.text();
        })
        .then(data => {
            alert("Formulário enviado com sucesso!");
            form.reset();
        })
        .catch(error => {
            console.error(error);
            alert("Ocorreu um erro ao enviar o formulário.");
        });
    });
});