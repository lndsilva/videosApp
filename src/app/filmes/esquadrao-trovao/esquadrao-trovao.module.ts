import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquadraoTrovaoPageRoutingModule } from './esquadrao-trovao-routing.module';

import { EsquadraoTrovaoPage } from './esquadrao-trovao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquadraoTrovaoPageRoutingModule
  ],
  declarations: [EsquadraoTrovaoPage]
})
export class EsquadraoTrovaoPageModule {}
