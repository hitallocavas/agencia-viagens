import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ClienteHomeComponent } from './pages/cliente/cliente-home/cliente-home.component';
import { ReservasComponent } from './pages/cliente/reservas/reservas.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { VoosComponent } from './pages/admin/voos/voos.component';
import { VooService } from './services/voo.service';
import { ReservaService } from './services/reserva.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    LoginComponent,
    ClienteHomeComponent,
    ReservasComponent,
    AdminHomeComponent,
    VoosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioService, VooService, ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
