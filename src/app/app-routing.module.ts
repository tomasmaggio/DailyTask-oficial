import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasmodalComponent } from './modules/notas/pages/notasmodal/notasmodal.component';

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


//ruta provisoria solo para ir testeando el modal (si estas viendo esto en la rama main, es porque me olvide de borrarla, por favor borrala!!!!!)
{
  path:':id',component:NotasmodalComponent
},
//Borrar!!!



{
  path:'',
  loadChildren:()=>import('./modules/usuario/usuario.module').then( m=> m.UsuarioModule)
},

{
  path:'bienvenida',
  loadChildren:()=>import('./modules/bienvenida/bienvenida.module').then( m=> m.BienvenidaModule)
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
