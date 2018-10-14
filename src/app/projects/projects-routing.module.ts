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
    loadChildren: './bsc/bsc.module#BscModule'
  },
  {
    path: 'museum',
    loadChildren: './museum/museum.module#MuseumModule'
  },
  {
    path: 'bkeszi',
    loadChildren: './bkeszi/bkeszi.module#BkesziModule'
  },
  {
    path: 'pp',
    loadChildren: './pp/pp.module#PpModule'
  },
  {
    path: 'vtn',
    loadChildren: './vtn/vtn.module#VtnModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
