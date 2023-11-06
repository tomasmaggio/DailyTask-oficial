import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

const routes: Routes = [

  {path: '', component:UsuarioComponent},
  {path: 'config-usuario', component:ConfigUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
