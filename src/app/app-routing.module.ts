import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sem-retorno',
    loadChildren: () => import('./filmes/sem-retorno/sem-retorno.module').then( m => m.SemRetornoPageModule)
  },
  {
    path: 'mira-perigo',
    loadChildren: () => import('./filmes/mira-perigo/mira-perigo.module').then( m => m.MiraPerigoPageModule)
  },
  {
    path: 'esquadrao-trovao',
    loadChildren: () => import('./filmes/esquadrao-trovao/esquadrao-trovao.module').then( m => m.EsquadraoTrovaoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
