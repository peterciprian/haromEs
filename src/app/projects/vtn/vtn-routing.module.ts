import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VtnComponent } from './vtn.component';
const routes: Routes = [
  {
    path: '',
    component: VtnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VtnRoutingModule { }
