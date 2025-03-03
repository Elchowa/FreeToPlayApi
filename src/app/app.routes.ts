import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'character-detail/',
    loadComponent: () => import('./pages/character-detail/character-detail.page').then( m => m.CharacterDetailPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'game-details/:id',
    loadComponent: () => import('./pages/game-details/game-details.page')
      .then(m => m.GameDetailsPage)
  }
  ,
  {
    path: 'character-detail',
    loadComponent: () => import('./pages/character-detail/character-detail.page').then( m => m.CharacterDetailPage)
  },
];
