"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuariorepository_1 = require("./usuariorepository");
class UsuarioService {
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
    login(loginDTO) {
        if (!this.repository.existeUsuarioPorEmail(loginDTO.email)) {
            throw new Error("Não existe cadastro com o e-mail enviado.");
        }
        const usuario = this.repository.buscarPorEmailSenha(loginDTO.email, loginDTO.senha);
        if (!usuario) {
            throw new Error("Senha inválida.");
        }
        return usuario;
    }
    buscarTodos() {
        return this.repository.buscarTodos();
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuarioservice.js.map