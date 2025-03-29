import { Component } from '@angular/core';
import { Chamado, ChamadoService } from '../../services/chamado.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-chamado-resolver',
  standalone: true,
  imports: [CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './chamado-resolver.component.html',
  styleUrl: './chamado-resolver.component.scss',
})
export class ChamadoResolverComponent {
  chamado!: Chamado;
  loading = true;
  errorMessage: string = '';

  constructor(
    private chamadoService: ChamadoService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.chamadoService.getPrimeiroChamadoDaFila().subscribe((data) => {
      this.chamado = data;
    });
  }

  resolverChamado() {
    if (this.chamado && this.chamado.id) {
      this.chamadoService
        .resolverChamado(this.chamado.id)
        .subscribe((response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Chamado resolvido com sucesso!',
          });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        });
    }
  }
}
