import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardadosComponent } from './pages/guardados/guardados.component';

const routes: Routes = [

{
  path:'guardados', component:GuardadosComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardadosRoutingModule { }
