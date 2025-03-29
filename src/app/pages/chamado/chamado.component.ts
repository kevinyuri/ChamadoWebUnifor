import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ChamadoService } from '../../services/chamado.service';

interface Chamado {
  id?: number;
  nomeSolicitante: string;
  setor: string;
  mensagem: string;
  status?: string;
}

@Component({
  selector: 'app-chamado',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule],
  templateUrl: './chamado.component.html',
  styleUrl: './chamado.component.scss',
})
export class ChamadoComponent {
  chamados: Chamado[] = [];
  isLoading: boolean = true;

  constructor(private chamadoService: ChamadoService) {}

  ngOnInit() {
    this.chamadoService.getAllChamados().subscribe((data) => {
      this.chamados = data;
    });
  }
}
