import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosSeriesPageRoutingModule } from './dados-series-routing.module';

import { DadosSeriesPage } from './dados-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosSeriesPageRoutingModule
  ],
  declarations: [DadosSeriesPage]
})
export class DadosSeriesPageModule {}
