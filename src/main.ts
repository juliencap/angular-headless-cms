import { bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from 'girondins33-design-system/loader';
import { App } from './app/app';
import { appConfig } from './app/app.config';

defineCustomElements(window, {
  resourcesUrl: '/build/girondins33-design-system/',
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
