import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'My App';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'pl']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
