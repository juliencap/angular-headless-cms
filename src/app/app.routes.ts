import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'Actualites/:idslug',
    loadComponent: () =>
      import('./components/actualite-detail/actualite-detail').then((m) => m.ActualiteDetail),
  },
  {
    path: 'calendrier',
    loadComponent: () =>
      import('./components/calendrier/calendrier').then((m) => m.CalendrierComponent),
  },
];
