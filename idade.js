function verificarIdade(idade) {
    if (idade >= 18) {
        return true;
    }

    return false;
}

// Permite que o Jest utilize a função
if (typeof module !== "undefined") {
    module.exports = { verificarIdade };
}