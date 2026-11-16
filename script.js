const campoIdade = document.getElementById("idade");

const botaoVerificar =
    document.getElementById("btnVerificar");

const mensagem =
    document.getElementById("mensagem");


botaoVerificar.addEventListener("click", () => {

    const valor = campoIdade.value.trim();

    if (valor === "") {

        mensagem.textContent =
            "Digite sua idade.";

        mensagem.className =
            "mensagem erro";

        return;
    }

    const idade = Number(valor);

    if (idade < 0) {

        mensagem.textContent =
            "Digite uma idade válida.";

        mensagem.className =
            "mensagem erro";

        return;
    }

    const resultado = verificarIdade(idade);

    if (resultado === true) {

        mensagem.textContent =
            "Maior de idade";

        mensagem.className =
            "mensagem maior";

    } else {

        mensagem.textContent =
            "Menor de idade";

        mensagem.className =
            "mensagem menor";
    }

});