
import { InterfaceParticipantes } from './../votacao/model/interfaceParticipantes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  private readonly url='https://7841-189-28-43-176.ngrok.io/api';
  private readonly consultarTodos ='/participante/consultarTodos';
  private readonly salvarParticipante ='/participante/salvar';

  private readonly uri='../../assets/dados.json';
  constructor(private http: HttpClient ) { }



  listJson() {
    return this.http.get<InterfaceParticipantes[]>(this.uri)
    .pipe(tap(lista=>console.log(lista)))
  }

  salvarPartPostApi(data:InterfaceParticipantes) {

    return this.http.post<InterfaceParticipantes>(this.url+this.salvarParticipante, data )
               .pipe(first(), tap(dados => console.log(dados)));
  }



  listarTodosGetApi(){
    return this.http.get<InterfaceParticipantes[]>(this.url+'/participante/consultarTodos')
                .pipe(tap(lista => console.log(lista)), first());

  }

}
