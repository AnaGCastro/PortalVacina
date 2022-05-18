import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacinacao } from '../models/vacinacao';

@Injectable({
  providedIn: 'root'
})
export class vacinacaoService {


  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

    findAll() : Observable<Vacinacao[]> {
      return this.httpClient.get<Vacinacao[]>(`${environment.api_url}/vacinacao`);
    }
    save(vacinacaoObj: Vacinacao){
      return this.httpClient.post<Vacinacao>(`${environment.api_url}/vacinacao`, vacinacaoObj);
    }

    getOne(id : number){
      return this.httpClient.get<Vacinacao>(`${environment.api_url}/vacinacao/${id}`);
    }

    update(id: number, vacinacaoObj: Vacinacao){
      return this.httpClient.patch<Vacinacao>(`${environment.api_url}/vacinacao/${id}`, vacinacaoObj);
    }
    getByNome(nome : string) {
      return this.httpClient.get<Vacinacao>(`${environment.api_url}/vacinacao/pesquisar/${nome}`);
    }
}

