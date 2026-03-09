import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Actualite } from '../interfaces/actualite.interface';
import { Calendrier } from '../interfaces/calendrier.interface';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getActualites(perPage: number = 10): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`${this.apiUrl}/actualite?per_page=${perPage}`);
  }

  getActualiteBySlug(slug: string): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`${this.apiUrl}/actualite?slug=${slug}`);
  }

  getCalendriers(): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(
      `${this.apiUrl}/calendrier-girondins?per_page=100&_fields=id,slug,title,acf`,
    );
  }

  getCalendrierBySlug(slug: string): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(
      `${this.apiUrl}/calendrier-girondins?slug=${slug}&_fields=id,slug,title,acf`,
    );
  }
}
