import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

nome: FormControl = new FormControl(null,Validators.minLength(3));
cpf: FormControl = new FormControl(null,Validators.minLength(12));
dataNasc: FormControl = new FormControl(null,Validators.minLength(8));
endereco: FormControl = new FormControl(null,Validators.minLength(3));
telefone: FormControl = new FormControl(null,Validators.minLength(3));


  constructor() { }

  ngOnInit(): void {
  }


  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.dataNasc.valid
    && this.endereco.valid && this.telefone.valid
  }

}
