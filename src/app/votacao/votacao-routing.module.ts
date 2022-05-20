import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { VotacaoCompComponent } from './votacao-comp/votacao-comp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantesComponent } from './participantes/participantes.component';

const routes: Routes = [
  { path:'', component: ParticipantesComponent },
  { path:'votar', component: VotacaoCompComponent},
  { path:'cadastrar', component: FormCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacaoRoutingModule { }
