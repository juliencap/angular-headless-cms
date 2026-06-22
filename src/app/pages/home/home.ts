import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActualiteList } from '../../components/actualite-list/actualite-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActualiteList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {}
