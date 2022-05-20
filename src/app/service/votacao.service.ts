import { ParticipantesComponent } from './../votacao/participantes/participantes.component';
import { InterfaceParticipantes } from './../votacao/model/interfaceParticipantes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  url ='http://localhost:8080/api/';
  consultarTodos ='participante/consultarTodos'
  urlVotacao = '/votar';


  constructor( private httpClient: HttpClient) {}

  getData(endpoint: string): Observable<any[]>{
    console.log('${this.url}${endpoint}')

    return this.httpClient.get<any[]>('${this.url}${endpoint}');
  }

  postData(voto: ParticipantesComponent) {
    console.log('https://7841-189-28-43-176.ngrok.io/api/votar',voto)
    return this.httpClient.post<InterfaceParticipantes>('https://7841-189-28-43-176.ngrok.io/api/votar', voto);
  }



  handleError(erro: HttpErrorResponse){
    let errorMenssage = '';
    if(erro.error instanceof ErrorEvent){
      errorMenssage = erro.error.message;
    }
  }

  listarParticipantes(){
    return this.httpClient.get('https://7841-189-28-43-176.ngrok.io/api/participante/consultarTodos')
        .subscribe(resultado => console.log(resultado));
  }
  listarObserver(){
    return this.httpClient.get<InterfaceParticipantes[]>(this.url+this.consultarTodos)
                .pipe( tap(listar => console.log(listar)) )
  }

}
