import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bubbles',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './bubbles.component.html',
  styleUrl: './bubbles.component.css'
})
export class BubblesComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'pl']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
