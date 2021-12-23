import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { VooService } from 'src/app/services/voo.service';
import { Constants } from '../../../../../../../commons/constants';
import { Voo } from '../../../../../../../commons/entidade/voo';

@Component({
  selector: 'app-voos',
  templateUrl: './voos.component.html',
  styleUrls: ['./voos.component.css']
})
export class VoosComponent implements OnInit {

  voo: Voo = new Voo();
  voos: Voo[] = [];

  constructor(
    private titleService: Title,
    private vooService: VooService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.reset();
    this.titleService.setTitle(Constants.VOOS_TITULO);
  }

  private reset() {
    this.voo = new Voo();
    this.vooService.buscarTodos().subscribe(data => this.voos = data);
  }

  cadastrar(): void {
    this.vooService.cadastrar(this.voo).subscribe(response => {
      this.mostrarAlertSucesso(response.mensagem)
      this.reset();
    });
  }

  mostrarAlertSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso!");
  }

}
