import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasmodalComponent } from './modules/notas/pages/notasmodal/notasmodal.component';
import { NotasModule } from './modules/notas/notas.module';
import { NotasComponent } from './modules/notas/pages/notas/notas.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  }, 

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
  path:'', //usuario
  loadChildren:()=>import('./modules/usuario/usuario.module').then( m=> m.UsuarioModule)
},

{
  path:'bienvenida',
  loadChildren:()=>import('./modules/bienvenida/bienvenida.module').then( m=> m.BienvenidaModule)
},

{
  path: '',
  loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
