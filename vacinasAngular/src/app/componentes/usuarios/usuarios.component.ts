import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {




  usuarios: Usuario[]=[]


  constructor(private service: usuarioService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() : void {
    this.service.findAll().subscribe(
      (resposta) => {
        console.log(resposta);
        this.usuarios = resposta;
      }
    );

    }




}
