import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpComponent } from './pp.component';
import { PpRoutingModule } from './pp-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PpRoutingModule
  ],
  declarations: [PpComponent]
})
export class PpModule { }
