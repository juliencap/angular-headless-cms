import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActualiteList } from './components/actualite-list/actualite-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActualiteList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}