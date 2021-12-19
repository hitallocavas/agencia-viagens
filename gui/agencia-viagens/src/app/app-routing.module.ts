import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
