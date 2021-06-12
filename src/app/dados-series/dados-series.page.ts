import { ISerie } from './../models/ISerie.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {

  serie: ISerie;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {

    this.serie = this.dadosService.pegarDados('serie');
    console.log('serie enviada', this.serie);

  }

}
