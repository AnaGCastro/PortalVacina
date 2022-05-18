import { Component, OnInit } from '@angular/core';
import { Vacina } from 'src/app/models/vacina';
import { vacinaService } from 'src/app/service/vacina.service';

@Component({
  selector: 'app-vacinas-list',
  templateUrl: './vacinas-list.component.html',
  styleUrls: ['./vacinas-list.component.css']
})
export class VacinasListComponent implements OnInit {

  vacinas : Vacina[]=[]



  constructor(private service: vacinaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() : void {
    this.service.findAll().subscribe(
      (resposta) => {
        console.log(resposta);
        this.vacinas = resposta;
      }
    );

    }
  }

