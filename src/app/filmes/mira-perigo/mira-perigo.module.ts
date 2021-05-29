import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiraPerigoPageRoutingModule } from './mira-perigo-routing.module';

import { MiraPerigoPage } from './mira-perigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiraPerigoPageRoutingModule
  ],
  declarations: [MiraPerigoPage]
})
export class MiraPerigoPageModule {}
