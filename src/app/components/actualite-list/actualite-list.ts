import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress';

@Component({
  selector: 'app-actualite-list',
  standalone: true,
  imports: [],
  templateUrl: './actualite-list.html',
  styleUrl: './actualite-list.scss'
})
export class ActualiteList implements OnInit {
  actualites: any[] = [];

  constructor(private wpService: WordpressService) {}

  ngOnInit() {
    this.wpService.getActualites(10).subscribe({
      next: (data) => this.actualites = data,
      error: (err) => console.error('Erreur API :', err)
    });
  }
}