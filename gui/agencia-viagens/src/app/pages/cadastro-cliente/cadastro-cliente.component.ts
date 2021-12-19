import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Constants } from '../../../../../../commons/constants'
import { Usuario } from '../../../../../../commons/entidade/usuario';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  usuario: Usuario = Usuario.ofUsuarioCliente();
  senhaConfirmacao = "";

  constructor(
    private titleService: Title,
    private usuarioService: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.titleService.setTitle(Constants.CADASTRO_CLIENTE_TITULO);
  }

  cadastrar(): void {
    this.validarSenhas();
    this.usuarioService.cadastrar(this.usuario).subscribe(response => {
      this.mostrarAlertSucesso(response.mensagem);
    }, (err) => {
      console.log(err.error.mensagem)
      this.mostrarAlertErro(err.error.mensagem);
    })
  }

  private validarSenhas() {
    if (this.usuario.senha !== this.senhaConfirmacao) {
      this.mostrarAlertErro("As senhas precisam ser iguais!");
    }
  }

  private resetarUsuario() {
    this.usuario = Usuario.ofUsuarioCliente();
    this.senhaConfirmacao = "";
  }

  mostrarAlertSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso!");
    this.resetarUsuario();
  }

  mostrarAlertErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro!");
  }

}
