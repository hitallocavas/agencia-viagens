"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor() { }
    static ofUsuarioCliente() {
        var usuario = new Usuario();
        usuario.tipo = "CLIENTE";
        return usuario;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map