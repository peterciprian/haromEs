import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BscComponent } from './bsc.component';

const routes: Routes = [
  {
    path: '',
    component: BscComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BscRoutingModule { }
