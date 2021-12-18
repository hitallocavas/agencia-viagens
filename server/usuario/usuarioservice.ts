import { Usuario } from '../../commons/entidade/usuario'
import {LoginDTO} from '../../commons/dto/logindto'
import { UsuarioRepository } from './usuariorepository'

export class UsuarioService {

    repository: UsuarioRepository = new UsuarioRepository();

    cadastrar(usuario: Usuario): Usuario {
        this.repository.adicionarUsuario(usuario);
        return usuario;
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