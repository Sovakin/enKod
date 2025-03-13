import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../city.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent {
  newCity: Partial<City> = {
    name: '',
    description: '',
    image: ''
  };

  constructor(
    private cityService: CityService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.newCity.name && this.newCity.description && this.newCity.image) {
      const city: City = {
        ...this.newCity,
        id: this.generateId(),
        favorite: false
      } as City;

      this.cityService.addCity(city);
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  private generateId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}
