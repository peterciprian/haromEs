import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VtnComponent } from './vtn.component';
import { VtnRoutingModule } from './vtn-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VtnRoutingModule
  ],
  declarations: [VtnComponent]
})
export class VtnModule { }
