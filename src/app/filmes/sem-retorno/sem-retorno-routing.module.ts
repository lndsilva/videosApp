import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemRetornoPage } from './sem-retorno.page';

const routes: Routes = [
  {
    path: '',
    component: SemRetornoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemRetornoPageRoutingModule {}
