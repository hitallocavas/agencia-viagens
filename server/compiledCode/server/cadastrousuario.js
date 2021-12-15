"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroUsuario = void 0;
const usuariorepository_1 = require("./usuariorepository");
class CadastroUsuario {
    constructor() {
        this.repository = new usuariorepository_1.UsuarioRepository();
    }
    cadastrar(cliente) {
        if (this.repository.existeUsuarioPorCpf(cliente.cpf)) {
            throw new Error("Cpf já cadastrado no sistema.");
        }
        if (this.repository.existeUsuarioPorEmail(cliente.email)) {
            throw new Error("E-mail já cadastrado no sistema");
        }
        this.repository.adicionarUsuario(cliente);
        return cliente;
    }
    buscarTodos() {
        return this.repository.buscarTodos();
    }
}
exports.CadastroUsuario = CadastroUsuario;
//# sourceMappingURL=cadastrousuario.js.map