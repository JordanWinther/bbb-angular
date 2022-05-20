import { ParticipantesService } from 'src/app/service/participantes.service';
import { VotacaoService } from './../../service/votacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ParticipantesService) {
    this.form = this.formBuilder.group({
      id:[],
      nome:[]
    });
   }

  ngOnInit(): void {
  }

  salvar(){
    this.service.salvarPartPostApi(this.form.value).subscribe();

  }

}
