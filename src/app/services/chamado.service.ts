import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Chamado {
  id?: number;
  nomeSolicitante: string;
  setor: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private apiUrl = 'https://localhost:7078/api/chamado'; // Altere para o seu backend

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
}
