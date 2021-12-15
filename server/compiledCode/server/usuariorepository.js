"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
class UsuarioRepository {
    constructor() {
        this.usuarios = [];
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    buscarTodos() {
        return this.usuarios;
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