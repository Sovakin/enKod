import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileViewComponent } from '../tile-view/tile-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { CityService } from '../../services/city.service';
import { City } from '../../city.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TileViewComponent, ListViewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cities: City[] = [];
  viewMode: 'tile' | 'list' = 'tile';

  constructor(
    private cityService: CityService,
    private router: Router
  ) {
    this.cities = this.cityService.getCities();
  }

  toggleViewMode(mode: 'tile' | 'list'): void {
    this.viewMode = mode;
  }

  toggleFavorite(cityId: number): void {
    this.cityService.toggleFavorite(cityId);
  }

  navigateToCreate() {
    this.router.navigate(['/create']);
  }
}
