import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagComponent } from './mag.component';
import { MagRoutingModule } from './mag-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MagRoutingModule
  ],
  declarations: [MagComponent]
})
export class MagModule { }
