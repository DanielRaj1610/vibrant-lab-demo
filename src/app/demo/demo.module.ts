import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoHomeComponent } from './demo-home/demo-home.component';

@NgModule({
  declarations: [DemoHomeComponent],
  imports: [CommonModule, DemoRoutingModule, SharedModule],
})
export class DemoModule {}
