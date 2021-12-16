"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuariorepository_1 = require("../../usuario/usuariorepository");
describe('Repositório de Usuários', () => {
    var repositorio;
    beforeEach(() => repositorio = new usuariorepository_1.UsuarioRepository());
    it("Não possui registro de usuários", () => {
        expect(repositorio.buscarTodos().length).toBe(0);
    });
});
//# sourceMappingURL=usuariorepository.spec.js.map