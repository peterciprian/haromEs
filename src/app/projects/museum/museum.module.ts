import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumComponent } from './museum.component';
import { MuseumRoutingModule } from './museum-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MuseumRoutingModule
  ],
  declarations: [MuseumComponent]
})
export class MuseumModule { }
