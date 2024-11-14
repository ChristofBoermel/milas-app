import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'pl']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
