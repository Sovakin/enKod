import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileViewComponent } from './components/tile-view/tile-view.component'; // Adjust path
import { ListViewComponent } from './components/list-view/list-view.component'; // Adjust path
import { CityService } from './services/city.service'; // Adjust path
import { City } from './city.model'; // Adjust path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TileViewComponent, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: City[] = [];
  viewMode: 'tile' | 'list' = 'tile';

  constructor(private cityService: CityService) {
    this.cities = this.cityService.getCities();
  }

  toggleViewMode(mode: 'tile' | 'list'): void {
    this.viewMode = mode;
  }

  toggleFavorite(cityId: number): void {
    this.cityService.toggleFavorite(cityId);
  }
}