import { Usuario } from "../../commons/entidade/usuario";

export class UsuarioRepository {
    usuarios: Usuario[] = [];

    adicionarUsuario(usuario: Usuario): void {
        if (this.existeUsuarioPorCpf(usuario.cpf)) {
            throw new Error("Cpf já cadastrado no sistema.")
        }

        if (this.existeUsuarioPorEmail(usuario.email)) {
            throw new Error("E-mail já cadastrado no sistema")
        }

        this.usuarios.push(usuario);
    }

    buscarTodos(): Usuario[] {
        return this.usuarios;
    }

    buscarPorEmailSenha(email: string, senha: string): Usuario {
        return this.usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    }

    existeUsuarioPorCpf(cpf: string): boolean {
        return this.usuarios.some(usuario => usuario.cpf === cpf)
    }

    existeUsuarioPorEmail(email: string): boolean {
        return this.usuarios.some(usuario => usuario.email === email)
    }
}