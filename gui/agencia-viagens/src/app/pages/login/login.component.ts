import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Constants } from '../../../../../../commons/constants';
import { LoginDTO } from '../../../../../../commons/dto/logindto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO = new LoginDTO();

  constructor(
    private titleService: Title,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(Constants.LOGIN_TITULO);
  }

  login(): void {
    this.usuarioService.login(this.loginDTO).subscribe({
      next: (response) => {
        localStorage.setItem("usuarioLogado", JSON.stringify(response))
        this.mostrarAlertSucesso("Seja bem vindo.");
      },
      error: (err) => {
        this.mostrarAlertErro(err.error.mensagem);
      }
    })
  }

  private resetarLogin() {
    this.loginDTO = new LoginDTO();
  }

  mostrarAlertSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso!");
    this.resetarLogin();
  }

  mostrarAlertErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro!");
  }


}
