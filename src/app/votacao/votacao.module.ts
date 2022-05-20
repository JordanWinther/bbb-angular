import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParticipantesComponent } from './participantes/participantes.component';
import { VotacaoRoutingModule } from './votacao-routing.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { VotacaoCompComponent } from './votacao-comp/votacao-comp.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantesComponent,
    VotacaoCompComponent,
    FormCadastroComponent
  ],
  imports: [
    CommonModule,
    VotacaoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class VotacaoModule { }
