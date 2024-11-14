import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BubblesComponent } from "./bubbles/bubbles.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, BubblesComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'app';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'pl']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
