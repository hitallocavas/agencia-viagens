import { Usuario } from "../commons/usuario";

export class UsuarioRepository {
    usuarios: Usuario[] = [];

    adicionarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    buscarTodos(): Usuario[] {
        return this.usuarios;
    }

    existeUsuarioPorCpf(cpf: string): boolean {
        return this.usuarios.some(usuario => usuario.cpf === cpf)
    }

    existeUsuarioPorEmail(email: string): boolean {
        return this.usuarios.some(usuario => usuario.email === email)
    }
}