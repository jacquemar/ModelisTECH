import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideHttpClient, HttpInterceptorFn, withInterceptors} from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {corsInterceptor} from './corsInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([corsInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimationsAsync(),
  ]
};




