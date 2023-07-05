import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';

const routes: Routes = [
  {
    path:'calendario', component:CalendarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
