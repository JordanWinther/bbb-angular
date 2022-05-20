import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacaoModule } from './votacao/votacao.module';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'votacao'},
  { path: 'votacao', loadChildren: () => import('./votacao/votacao.module').then(m => m.VotacaoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, VotacaoModule]
})
export class AppRoutingModule { }
