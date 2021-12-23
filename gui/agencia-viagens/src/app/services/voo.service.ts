import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../../../../commons/dto/logindto';
import { Voo } from '../../../../../commons/entidade/voo';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  cadastrar(voo: Voo): Observable<any> {
    return this.http.post(environment.serverHost + "/voos", voo, { headers: this.headers })
  }

  buscarTodos(): Observable<any> {
    return this.http.get(environment.serverHost + "/voos", { headers: this.headers })
  }

}
