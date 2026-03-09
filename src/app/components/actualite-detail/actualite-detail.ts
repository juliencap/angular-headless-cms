import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WordpressService } from '../../services/wordpress';
import { Actualite } from '../../interfaces/actualite.interface';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualite-detail.html',
  styleUrl: './actualite-detail.scss',
})
export class ActualiteDetail implements OnInit {
  actualite: Actualite | null = null;
  safeContent: SafeHtml | null = null;

  constructor(
    private route: ActivatedRoute,
    private wpService: WordpressService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    const idslug = this.route.snapshot.paramMap.get('idslug');
    if (idslug) {
      const id = idslug.split('-')[0];
      this.wpService.getActualiteById(id).subscribe({
        next: (data) => {
          this.actualite = data;
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(data.content.rendered);
          this.loadTwitterScript();
        },
        error: (err) => console.error('Erreur API :', err),
      });
    }
  }

  private loadTwitterScript() {
    if (!this.actualite?.content?.rendered?.includes('twitter-tweet')) return;
    setTimeout(() => {
      if (document.querySelector('script[src*="twitter"]')) {
        (window as any).twttr?.widgets?.load();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }, 500);
  }
}
