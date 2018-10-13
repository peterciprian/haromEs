import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mag',
    pathMatch: 'full'
  },
  {
    path: 'mag',
    loadChildren: './mag/mag.module#MagModule'
  },
  {
    path: 'bsc',
    loadChildren: './mag/mag.module#MagModule'
  },
  {
    path: 'museum',
    loadChildren: './mag/mag.module#MagModule'
  },
  {
    path: 'bkeszi',
    loadChildren: './mag/mag.module#MagModule'
  },
  {
    path: 'pp',
    loadChildren: './mag/mag.module#MagModule'
  },
  {
    path: 'vtn',
    loadChildren: './mag/mag.module#MagModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
