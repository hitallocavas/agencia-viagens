"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
class UsuarioRepository {
    constructor() {
        this.usuarios = [];
    }
    adicionarUsuario(usuario) {
        if (this.existeUsuarioPorCpf(usuario.cpf)) {
            throw new Error("Cpf já cadastrado no sistema.");
        }
        if (this.existeUsuarioPorEmail(usuario.email)) {
            throw new Error("E-mail já cadastrado no sistema");
        }
        this.usuarios.push(usuario);
    }
    buscarTodos() {
        return this.usuarios;
    }
    buscarPorEmailSenha(email, senha) {
        return this.usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    }
    existeUsuarioPorCpf(cpf) {
        return this.usuarios.some(usuario => usuario.cpf === cpf);
    }
    existeUsuarioPorEmail(email) {
        return this.usuarios.some(usuario => usuario.email === email);
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuariorepository.js.map