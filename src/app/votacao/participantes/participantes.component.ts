//import { InterfaceParticipantes } from './../model/interfaceParticipantes';
import { first, Observable, tap } from 'rxjs';
import { ParticipantesService } from 'src/app/service/participantes.service';
import { Component, OnInit } from '@angular/core';
import { InterfaceParticipantes } from '../model/interfaceParticipantes';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {


  participantesArrayJson: Observable<InterfaceParticipantes[]>;
  participantesNgif$: Observable<InterfaceParticipantes[]>;
  displayedColumns = ['Id','name'];

  //Versão para Ngfor
  participantesNgfor: InterfaceParticipantes[] = [];
  participanteSalvar: InterfaceParticipantes = {id:'',nome:''} ;







  constructor(private service: ParticipantesService) {
    //Versão para Observable
    this.participantesArrayJson = this.service.listJson()
        .pipe(first())//First encerra a conexão ao receber o primeiro registro do banco.

    //Versão para NgIf
    this.participantesNgif$ = this.service.listarTodosGetApi();
    //Versão para Ngfor
   // this.service.salvarPartPostApi().subscribe(part => this.participanteSalvar = part);

    this.service.listarTodosGetApi().subscribe(dados => this.participantesNgfor = dados);
  }


  ngOnInit(): void {

  }

}
