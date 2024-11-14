import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as TranslationsDE from '../../public/i18n/de.json';
import * as TranslationsEN from '../../public/i18n/en.json';
import * as TranslationsPL from '../../public/i18n/pl.json';

interface Translation {
    [key: string]: string | Translation;
}

const TRANSLATIONS: Translation = {
    en: TranslationsEN,
    de: TranslationsDE,
    pl: TranslationsPL
};

export class StaticTranslationLoader implements TranslateLoader {
    public getTranslation(lang: string): Observable<Translation|string> {
        const translation = TRANSLATIONS[lang];
        if (translation) {
            return of(translation);
        } else {
            console.error(`Unknown language: ${lang}`);
            return of({});
        }
    }
}