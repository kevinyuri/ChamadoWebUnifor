import { Routes } from '@angular/router';
import { ChamadoComponent } from './pages/chamado/chamado.component';
import { HomeComponent } from './pages/home/home.component';
import { ChamadoCreateComponent } from './pages/chamado-create/chamado-create.component';
import { ChamadoResolverComponent } from './pages/chamado-resolver/chamado-resolver.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para Home ao acessar "/"
  { path: 'home', component: HomeComponent },
  { path: 'chamados', component: ChamadoComponent },
  { path: 'chamados/create', component: ChamadoCreateComponent },
  { path: 'resolver-chamado', component: ChamadoResolverComponent },
  { path: '**', redirectTo: 'home' }, // Redireciona qualquer rota inválida para Home
];
