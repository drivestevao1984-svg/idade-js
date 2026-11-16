const { verificarIdade } = require("./idade");

describe("Teste da função verificarIdade", () => {

    test("deve retornar true para uma pessoa adulta de 25 anos", () => {
        expect(verificarIdade(25)).toBe(true);
    });

    test("deve retornar false para uma pessoa menor de idade de 18 anos", () => {
        expect(verificarIdade(18)).toBe(false);
    });

    test("deve retornar true para a idade limite de 18 anos", () => {
        expect(verificarIdade(18)).toBe(true);
    });

});