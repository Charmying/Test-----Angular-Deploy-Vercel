import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OriginComponent } from './pages/origin/origin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  {
    path: 'pages',
    children: [
      /** 首頁 */
      { path: 'home', component: HomeComponent },
      /** 原 app.component */
      { path: 'origin', component: OriginComponent },
    ]
  }
];
