import { DadosService } from './../services/dados.service';
import { Router } from '@angular/router';
import { ISerie } from './../models/ISerie.model';
import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Séries';

  listaSeries: ISerie[] = [
    {
      nome: 'Loki (2021)',
      lancamento: '17 de abr de 2011',
      duracao: '44m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gJBqHWDKLKdPhd011bcGgQTT9Ib.jpg',
      generos: ['Action', 'Adventure', 'Sci-Fi', 'Fantasy']
    },
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
      lancamento: '17 de abr de 2011',
      duracao: '50m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: ['Sci-Fi','Fantasy', 'Action','Adventure','Drama','War','Politics']
    },
    {
      nome: 'Superman e Lois (2021)',
      lancamento: '23 de fev de 2021',
      duracao: '1h 4m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure', 'Drama']
    },
    {
      nome: 'Sweet Tooth (2021)',
      lancamento: '04 de jun de 2021',
      duracao: '45m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg',
      generos: ['Drama',' Sci-Fi & Fantasy']
    },
    {
      nome: 'Legados (2018)',
      lancamento: '25 de out de 2018',
      duracao: '43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/roFJeeBbcFYCaTfmKaCQ7wtCT5l.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama' ]
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) { }

  exibirSerie(serie: ISerie) {
    this.dadosService.guardarDados('serie', serie);
    this.route.navigateByUrl('/dados-series');
  }


  async exibirAlertFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, Favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
