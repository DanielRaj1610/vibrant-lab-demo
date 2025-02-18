import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesHomeComponent } from './pages-home/pages-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesHomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
