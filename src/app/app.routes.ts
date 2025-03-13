import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCityComponent } from './components/create-city/create-city.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateCityComponent }
];
