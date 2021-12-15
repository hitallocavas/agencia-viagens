import { Usuario } from '../commons/usuario'
import { UsuarioRepository } from './usuariorepository'

export class CadastroUsuario {

    repository: UsuarioRepository = new UsuarioRepository();

    cadastrar(cliente: Usuario): Usuario {
        if (this.repository.existeUsuarioPorCpf(cliente.cpf)) {
            throw new Error("Cpf já cadastrado no sistema.")
        }

        if (this.repository.existeUsuarioPorEmail(cliente.email)) {
            throw new Error("E-mail já cadastrado no sistema")
        }

        this.repository.adicionarUsuario(cliente);
        return cliente;
    }

    buscarTodos(): Usuario[]{
        return this.repository.buscarTodos();
    }
}