import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';

const routes: Routes = [{ path: '', component: DemoHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
