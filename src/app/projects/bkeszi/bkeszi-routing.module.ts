import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BkesziComponent } from './bkeszi.component';

const routes: Routes = [
  {
    path: '',
    component: BkesziComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkesziRoutingModule { }
