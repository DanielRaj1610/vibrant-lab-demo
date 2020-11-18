import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesHomeComponent } from './pages-home/pages-home.component';

const routes: Routes = [
  { path: '', component: PagesHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
