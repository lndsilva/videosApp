import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquadraoTrovaoPage } from './esquadrao-trovao.page';

const routes: Routes = [
  {
    path: '',
    component: EsquadraoTrovaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquadraoTrovaoPageRoutingModule {}
