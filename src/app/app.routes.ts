import { Routes } from '@angular/router';
import { ChamadoComponent } from './pages/chamado/chamado.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para Home ao acessar "/"
  { path: 'home', component: HomeComponent },
  { path: 'chamado', component: ChamadoComponent },
  // { path: 'ver-chamados', component: VerChamadosComponent },
  { path: '**', redirectTo: 'home' }, // Redireciona qualquer rota inválida para Home
];
