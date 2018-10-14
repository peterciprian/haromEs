import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpComponent } from './pp.component';
const routes: Routes = [
  {
    path: '',
    component: PpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PpRoutingModule { }
