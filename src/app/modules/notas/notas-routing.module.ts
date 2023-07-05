import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './pages/notas/notas.component';

const routes: Routes = [

{
  path: 'notas', component:NotasComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
