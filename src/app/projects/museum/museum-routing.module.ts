import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseumComponent } from './museum.component';
const routes: Routes = [
  {
    path: '',
    component: MuseumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseumRoutingModule { }
