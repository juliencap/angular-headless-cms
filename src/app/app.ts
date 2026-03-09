import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordpressService } from './services/wordpress';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('angular-headless-cms');
  actualites: any[] = [];

  constructor(private wpService: WordpressService) {}

  ngOnInit() {
    this.wpService.getActualites(5).subscribe({
      next: (data) => {
        this.actualites = data;
        console.log('Articles reçus :', data);
      },
      error: (err) => console.error('Erreur API :', err)
    });
  }
}