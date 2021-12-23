import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reserva } from '../../../../../commons/entidade/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  cadastrar(reserva: Reserva): Observable<any> {
    return this.http.post(environment.serverHost + "/reservas", reserva, { headers: this.headers })
  }

  buscarTodos(): Observable<any> {
    return this.http.get(environment.serverHost + "/reservas", { headers: this.headers })
  }

  buscarPorCpf(cpf: string): Observable<any>{
    return this.http.get(environment.serverHost + "/reservas/" + cpf, { headers: this.headers })
  }

}
