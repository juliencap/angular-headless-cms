import { Routes } from '@angular/router';
import { ActualiteList } from './components/actualite-list/actualite-list';
import { ActualiteDetail } from './components/actualite-detail/actualite-detail';
import { CalendrierComponent } from './components/calendrier/calendrier';

export const routes: Routes = [
  { path: '', component: ActualiteList },
  { path: 'Actualites/:idslug', component: ActualiteDetail },
  { path: 'calendrier', component: CalendrierComponent },
];
