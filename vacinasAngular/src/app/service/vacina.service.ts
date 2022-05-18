import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../models/vacina';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class vacinaService {


  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

    findAll() : Observable<Vacina[]> {
      return this.httpClient.get<Vacina[]>(`${environment.api_url}/vacinas`);
    }
    save(vacinasObj: Vacina){
      return this.httpClient.post<Vacina>(`${environment.api_url}/vacinas`, vacinasObj);
    }

    delete(id : number){

      return this.httpClient.delete(`${environment.api_url}/professores/${id}`);
    }

    getOne(id : number){
      return this.httpClient.get<Vacina>(`${environment.api_url}/vacinas/${id}`);
    }

    update(id: number, vacinasObj: Vacina){
      return this.httpClient.patch<Vacina>(`${environment.api_url}/vacinas/${id}`, vacinasObj);
    }

    getByNome(nome : string) {
      return this.httpClient.get<Vacina>(`${environment.api_url}/vacinas/pesquisar/${nome}`);
    }

}

