import { Usuario } from '../commons/usuario'
import {LoginDTO} from '../commons/logindto'
import { UsuarioRepository } from './usuariorepository'

export class UsuarioService {

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

    login(loginDTO: LoginDTO): Usuario{
        if(!this.repository.existeUsuarioPorEmail(loginDTO.email)){
            throw new Error("Não existe cadastro com o e-mail enviado.");
        }
        
        const usuario = this.repository.buscarPorEmailSenha(loginDTO.email, loginDTO.senha);

        if(!usuario){
            throw new Error("Senha inválida.")
        }

        return usuario;
    }

    buscarTodos(): Usuario[]{
        return this.repository.buscarTodos();
    }
}