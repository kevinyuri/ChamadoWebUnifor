import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    MenuModule,
    SidebarModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ChamadoWebUnifor';
  items: any[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      {
        label: 'Cadastrar Chamado',
        icon: 'pi pi-ticket',
        routerLink: '/chamados/create',
      },
      {
        label: 'Ver Chamados',
        icon: 'pi pi-search',
        routerLink: '/chamados',
      },
    ];
  }
}
