import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { VacinacaoComponent } from './componentes/vacinacao/vacinacao.component';
import { VacinasListComponent } from './componentes/vacinas-list/vacinas-list.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { FormularioVacinacaoComponent } from './formulario-vacinacao/formulario-vacinacao.component';
import { FormularioVacinasComponent } from './formulario-vacinas/formulario-vacinas.component';

const routes: Routes = [
  {path:'', component: NavComponent, children:[
  {path: 'vacinas', component:VacinasListComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'vacinacao', component:VacinacaoComponent},
  {path: 'formulario-usuarios', component:FormularioUsuariosComponent},
  {path: 'usuarios/cadastrar', component:FormularioUsuariosComponent},
  {path: 'formulario-vacinacao', component:FormularioVacinacaoComponent},
  {path: 'vacinas/adcionar', component:FormularioVacinasComponent},
  {path: 'formulario-vacinas', component:FormularioVacinasComponent}


  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
