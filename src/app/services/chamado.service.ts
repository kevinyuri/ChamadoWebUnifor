import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Chamado {
  id?: number;
  nomeSolicitante: string;
  setor: string;
  mensagem: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private apiUrl = 'https://appchamadosunifor-c2dfdpfvdne7gmb6.brazilsouth-01.azurewebsites.net/api/Chamado'; // Altere para o seu backend

  constructor(private http: HttpClient) {}

  criarChamado(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`${this.apiUrl}`, chamado);
  }

  getChamado(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.apiUrl}/${id}`);
  }

  getAllChamados(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}`);
  }

  getPrimeiroChamadoDaFila(): Observable<Chamado> {
    return this.http.get<any>(`${this.apiUrl}/primeiro-chamado`);
  }

  resolverChamado(chamadoId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/resolver-chamado/${chamadoId}`,
      {}
    );
  }
}
