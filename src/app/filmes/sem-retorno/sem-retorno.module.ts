import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemRetornoPageRoutingModule } from './sem-retorno-routing.module';

import { SemRetornoPage } from './sem-retorno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemRetornoPageRoutingModule
  ],
  declarations: [SemRetornoPage]
})
export class SemRetornoPageModule {}
