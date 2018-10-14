import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BscComponent } from './bsc.component';
import { BscRoutingModule } from './bsc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BscRoutingModule
  ],
  declarations: [BscComponent]
})
export class BscModule { }
