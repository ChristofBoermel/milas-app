import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BubblesComponent } from './bubbles/bubbles.component';

export const routes: Routes = [
        {
            path: '',
            component: HeaderComponent,
        },
        {
            path: 'home',
            component: HeaderComponent,
        },
        {
            path: 'landing',
            component: BubblesComponent,
        },
        { 
            path: '**',
            component: HeaderComponent
        }
];
