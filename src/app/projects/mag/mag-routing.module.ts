import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagComponent } from './mag.component';

const routes: Routes = [
  {
    path: '',
    component: MagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagRoutingModule { }
