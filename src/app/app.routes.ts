import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'packages',
    loadComponent: () => import('./packages/packages.page').then( m => m.PackagesPage)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.page').then( m => m.ContactUsPage)
  },
];
