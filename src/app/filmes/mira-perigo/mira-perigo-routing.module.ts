import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiraPerigoPage } from './mira-perigo.page';

const routes: Routes = [
  {
    path: '',
    component: MiraPerigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiraPerigoPageRoutingModule {}
