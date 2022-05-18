import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { VacinacaoComponent } from './componentes/vacinacao/vacinacao.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { FormularioVacinasComponent } from './formulario-vacinas/formulario-vacinas.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioVacinacaoComponent } from './formulario-vacinacao/formulario-vacinacao.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VacinasListComponent } from './componentes/vacinas-list/vacinas-list.component';


@NgModule({
  declarations: [

    AppComponent,
    NavComponent,
    NavComponent,
    VacinacaoComponent,
    UsuariosComponent,
    FormularioVacinasComponent,
    FormularioUsuariosComponent,
    FormularioVacinacaoComponent,
    VacinasListComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NgxMaskModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
