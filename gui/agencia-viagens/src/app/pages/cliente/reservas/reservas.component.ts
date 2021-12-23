import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../../commons/constants';
import { Voo } from '../../../../../../../commons/entidade/voo';
import { Reserva } from '../../../../../../../commons/entidade/reserva';
import { VooService } from 'src/app/services/voo.service';
import { Usuario } from '../../../../../../../commons/entidade/usuario';
import { ReservaService } from 'src/app/services/reserva.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  voos: Voo[] = []
  reservas: Reserva[] = [];

  constructor(
    private title: Title,
    private vooService: VooService,
    private reservaService: ReservaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title.setTitle(Constants.RESERVAS_TITULO);
    this.reset();
  }

  private reset() {
    this.vooService.buscarTodos().subscribe(data => this.voos = data);
    this.buscarPorCpf();
  }

  reservar(voo: Voo): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    this.reservaService.cadastrar({
      cpfCliente: usuarioLogado.cpf,
      voo: voo
    }).subscribe({
      next: (response) => {
        this.mostrarAlertSucesso(response.mensagem);
        this.buscarPorCpf();
      },
      error: (err) => {
        this.mostrarAlertErro(err.error.mensagem);
      }
    })
  }

  mostrarAlertSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso!");
  }

  mostrarAlertErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro!");
  }

  buscarPorCpf(): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    let cpfCliente = usuarioLogado.cpf;

    this.reservaService.buscarPorCpf(cpfCliente).subscribe(data => this.reservas = data);
  }
}
