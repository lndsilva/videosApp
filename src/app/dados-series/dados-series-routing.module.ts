import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosSeriesPage } from './dados-series.page';

const routes: Routes = [
  {
    path: '',
    component: DadosSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosSeriesPageRoutingModule {}
