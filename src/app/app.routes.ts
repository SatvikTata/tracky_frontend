import { Routes, withComponentInputBinding } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrackExpenseComponent } from './pages/track-expense/track-expense.component';
import { AboutComponent } from './pages/about/about.component';
import { TrackNetworthComponent } from './pages/track-networth/track-networth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page
  { path: 'track-expense', component: TrackExpenseComponent }, // Track Expenses Page
  { path: 'track-networth', component: TrackNetworthComponent },
  { path: 'about', component: AboutComponent }
];

export const appRouter = provideRouter(routes, withComponentInputBinding());