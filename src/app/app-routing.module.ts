import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading
{
  path:'',
  loadChildren:()=>import('./modules/auth/auth.module').then( m=> m.AuthModule)
},
{
  path:'inicio',
  loadChildren:()=>import('./modules/inicio/inicio.module').then( m=> m.InicioModule)
},
{
  path:'calendario',
  loadChildren:()=>import('./modules/calendario/calendario.module').then( m=> m.CalendarioModule)
},
{
  path:'guardados',
  loadChildren:()=>import('./modules/guardados/guardados.module').then( m=> m.GuardadosModule)
},
{
  path:'notas',
  loadChildren:()=>import('./modules/notas/notas.module').then( m=> m.NotasModule)
},
{
  path:'',
  loadChildren:()=>import('./modules/usuario/usuario.module').then( m=> m.UsuarioModule)
},

{
  path:'bienvenida',
  loadChildren:()=>import('./modules/bienvenida/bienvenida.module').then( m=> m.BienvenidaModule)
},

// {
//   path: '',
//   redirectTo: 'bienvenida', 
//   pathMatch: 'full'
// },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
