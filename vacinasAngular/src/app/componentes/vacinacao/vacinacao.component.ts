import { Component, OnInit } from '@angular/core';
import { vacinacaoService } from 'src/app/service/vacinacao.service';

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.component.html',
  styleUrls: ['./vacinacao.component.css']
})
export class VacinacaoComponent implements OnInit {

  vacinacaoes:any;

  constructor(private service: vacinacaoService) { }

  ngOnInit(): void {
    this.getAll();

  }
  public getAll(){

    this.service.findAll()
    .subscribe(
      (resposta) => {
        console.log(resposta);
        this.vacinacaoes = resposta;
      }
    );



  }

  public getAllByNome(nome: string){

    this.service.getByNome(nome)
    .subscribe(
      (resposta) => {
        console.log(resposta);
        this.vacinacaoes = resposta;
      }
    );

  }

}

