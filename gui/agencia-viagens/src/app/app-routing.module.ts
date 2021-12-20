import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ClienteHomeComponent } from './pages/cliente/cliente-home/cliente-home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservasComponent } from './pages/cliente/reservas/reservas.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { VoosComponent } from './pages/admin/voos/voos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clientes',
    component: ClienteHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'reservas',
        pathMatch: 'full'
      }
      ,
      {
        path: 'reservas',
        component: ReservasComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'voos',
        pathMatch: 'full'
      }
      ,
      {
        path: 'voos',
        component: VoosComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
