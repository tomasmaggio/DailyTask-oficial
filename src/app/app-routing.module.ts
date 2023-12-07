import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasmodalComponent } from './modules/notas/pages/notasmodal/notasmodal.component';
import { NotasModule } from './modules/notas/notas.module';
import { NotasComponent } from './modules/notas/pages/notas/notas.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegistroComponent } from './modules/auth/pages/registro/registro.component';

const routes: Routes = [
  // Para que siempre al iniciar redirija a esta vista
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path: 'calendario',
    loadChildren: () => import('./modules/calendario/calendario.module').then(m => m.CalendarioModule)
  },

  {
    path: 'notas',
    loadChildren: () => import('./modules/notas/notas.module').then(m => m.NotasModule)
  },

  {
    path: 'usuario', //usuario
    loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'bienvenida',
    loadChildren: () => import('./modules/bienvenida/bienvenida.module').then(m => m.BienvenidaModule)
  },

  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  

  

  //comodin para redirigir la vista si la url no es la indicada
  // {
  //   path: '**',
  //   redirectTo: 'inicio', 
  // }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
