import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BkesziComponent } from './bkeszi.component';
import { BkesziRoutingModule } from './bkeszi-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BkesziRoutingModule
  ],
  declarations: [BkesziComponent]
})
export class BkesziModule { }
