import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, first, Subscriber } from 'rxjs';
import { VotacaoService } from '../../service/votacao.service';
import { InterfaceParticipantes } from './../model/interfaceParticipantes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacao-comp',
  templateUrl: './votacao-comp.component.html',
  styleUrls: ['./votacao-comp.component.css']
})
export class VotacaoCompComponent implements OnInit {
  form: FormGroup;
  participatesArray: InterfaceParticipantes[] | undefined;
  participantesInterface: InterfaceParticipantes[] = [];

  constructor(private service: VotacaoService, private formBuilder: FormBuilder ) {

    this.form = this.formBuilder.group({
      id:[],
      nome:[]
    });
    this.service.listarObserver().pipe(first())
    .subscribe(lista => this.participantesInterface = lista);

   }

  ngOnInit(): void {

  }
/*
  getParticipantes(){
    this.participatesArray = [
      {id:'1', nome:'Jordan Dev Pleno'},
      {id:'2', nome:'Henrique & Juliano'},
      {id:'3', nome:'Cesar Menote e Fabiano'},
      {id:'4', nome:'120 mil por ano'}
    ]
  }
*/
  votar(){
    this.service.postData(this.form.value)
      .subscribe(response => {
        console.log(response)
      })
  }




}
