import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {


  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

    findAll() : Observable<Usuario[]> {
      return this.httpClient.get<Usuario[]>(`${environment.api_url}/usuarios`);
    }
    save(usuarioObj: Usuario){
      return this.httpClient.post<Usuario>(`${environment.api_url}/usuarios`, usuarioObj);
    }

    delete(id : number){

      return this.httpClient.delete(`${environment.api_url}/usuarios/${id}`);
    }

    getOne(id : number){
      return this.httpClient.get<Usuario>(`${environment.api_url}/usuarios/${id}`);
    }

    update(id: number, usuarioObj: Usuario){
      return this.httpClient.patch<Usuario>(`${environment.api_url}/usuarios/${id}`, usuarioObj);
    }

    getByCpf(cpf : string) {
      return this.httpClient.get<Usuario>(`${environment.api_url}/usuarios/pesquisar/${cpf}`);
    }

}

