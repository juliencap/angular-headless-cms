import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ErrorBannerComponent } from './components/error-banner/error-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ErrorBannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
