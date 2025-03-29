import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ChamadoService } from '../../services/chamado.service';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chamado-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './chamado-create.component.html',
  styleUrl: './chamado-create.component.scss',
})
export class ChamadoCreateComponent {
  chamadoForm!: FormGroup;
  setores: any[] = [
    { label: 'TI', value: 'TI' },
    { label: 'Suporte', value: 'Suporte' },
    { label: 'Financeiro', value: 'Financeiro' },
    { label: 'RH', value: 'RH' },
  ]; // Exemplo de setores

  constructor(
    private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário com validações
    this.chamadoForm = this.fb.group({
      nomeSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      setor: ['', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.chamadoForm?.valid) {
      this.chamadoService.criarChamado(this.chamadoForm.value).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Chamado criado com sucesso!',
          });
          this.chamadoForm.reset();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro!',
            detail: 'Ocorreu um erro ao criar o chamado.',
          });
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}
