import { GeneroService } from './../services/genero.service';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IListaFilmes, IFilmeApi } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Sem Remorso',
      lancamento: '30/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      paginas: '/sem-retorno'
    },
    {
      nome: 'Na Mira do Perigo',
      lancamento: '18/02/2021',
      duracao: '1h 48m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wAJniojhHa4oVKa9AxdNwvpmS74.jpg',
      generos: ['Ação', 'Thriller', 'Crime'],
      paginas: '/mira-perigo'
    },
    {
      nome: 'Esquadrão Trovão',
      lancamento: '09/04/2021',
      duracao: '1h 47m',
      classificacao: 58,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aej7rR73kpAKce6XXBLeqijAwPD.jpg',
      generos: ['Ação', 'Aventura', 'Comédia'],
      paginas: '/esquadrao-trovao'
    },
    {
      nome: 'Mulher-Maravilha 1984',
      lancamento: '17/12/2020',
      duracao: '2h 31m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      paginas: '/esquadrao-trovao'
    },
    {
      nome: 'Vanquish',
      lancamento: '16/04/2021',
      duracao: '1h 36m',
      classificacao: 60,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg',
      generos: ['Ação', 'Crime', 'Thriller'],
      paginas: '/esquadrao-trovao'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [

  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }


  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim favoritar',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);

    });
  }

}
