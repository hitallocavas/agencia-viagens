import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from "./../../../../../commons/entidade/usuario"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post(environment.serverHost + "/usuarios", usuario, { headers: this.headers })
  }

}
