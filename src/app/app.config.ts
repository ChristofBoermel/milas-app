import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StaticTranslationLoader } from './translate/static-translations-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
              provideRouter(routes),
              provideAnimationsAsync(),
              provideZoneChangeDetection({eventCoalescing: true}),
              provideHttpClient(),
              importProvidersFrom([TranslateModule.forRoot({
                loader: {
                  provide: TranslateLoader,
                  useClass: StaticTranslationLoader,
                },
              })])
            ],
};
