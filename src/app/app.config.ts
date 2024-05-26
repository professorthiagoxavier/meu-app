import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {

  providers: 
  [
    provideRouter(routes),
    provideClientHydration(),
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
