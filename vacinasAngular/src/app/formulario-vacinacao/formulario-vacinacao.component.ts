
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { usuarioService } from '../service/usuario.service';
import { vacinaService } from '../service/vacina.service';
import { vacinacaoService } from '../service/vacinacao.service';


@Component({
  selector: 'app-formulario-vacinacao',
  templateUrl: './formulario-vacinacao.component.html',
  styleUrls: ['./formulario-vacinacao.component.css']
})
export class FormularioVacinacaoComponent implements OnInit {


  meuForm : FormGroup = new FormGroup({});

  usuarios:any;
  vacinacao:any
  user: any;
  vacina: any;
  vacinas: any;



  constructor(
    private formBuilder: FormBuilder,
    private vacinacaoService: vacinacaoService,
    private router:Router,
    private usuarioService: usuarioService,
    private vacinaService: vacinaService
    ) { }


  ngOnInit(): void {


    this.meuForm = this.formBuilder.group({
      usuario : [ this.user ] ,
      vacina : [ this.vacina ],
      dataAplic :[null],
      numDose: [null],
      proxDataDose:[null]

    });

  }








pesquisaUser(cpf : any) {
  this.usuarioService.getByCpf(cpf).subscribe(
    (resposta) => {
      console.log(resposta);
      this.usuarios=resposta;
    }
  )
}

pesquisaVacina(nome : any) {
  this.vacinaService.getByNome(nome).
  subscribe(
    (resposta) => {
      console.log(resposta);
      this.vacinas=resposta;
    }
  )

}

onSubmit(){

    this.meuForm.get('vacina')?.setValue(this.vacina);
    this.meuForm.get('usuario')?.setValue(this.user);
    this.vacinacaoService.save(this.meuForm.value)
    .subscribe(


      (data) => {

        console.log(data);
        // o navigate é para redirecionar para uma outra rota de interesse
        this.router.navigate(['/vacinacao']);
      }
    );


}

private getAllUsuarios(){

  this.usuarioService.findAll()
  .subscribe(
    (resposta) => {
      console.log(resposta);
      this.usuarios = resposta;
    }
  );

}
private getAllVacinas(){

  this.usuarioService.findAll()
  .subscribe(
    (resposta) => {
      console.log(resposta);
      this.vacinas = resposta;
    }
  );

}

addUser( nome : string, cpf : number) {
  this.user = "CPF: " + cpf+" - ";
  this.user += nome;
  }

addVacina(vacina : string) {
  this.vacina = vacina;

}
}
