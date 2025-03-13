import { Injectable } from '@angular/core';
import { City } from '../city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [
    { id: 1, name: 'Москва', description: 'Столица России, город федерального значения', image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png', favorite: false },
    { id: 2, name: 'Санкт-Петербург', description: 'Второй по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png', favorite: false },
    { id: 3, name: 'Новосибирск', description: 'Третий по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png', favorite: false },
    { id: 4, name: 'Екатеринбург', description: 'Город-миллионник в России. Тоже красивый город', image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png', favorite: false },
    { id: 5, name: 'Нижний Новгород', description: 'Город в центральной России. Красивый город.', image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png', favorite: false },
    { id: 6, name: 'Челябинск', description: 'Город в Российской Федерации, седьмой по количеству жителей', image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png', favorite: false },
    { id: 7, name: 'Казань', description: 'Город в России, столица Республики Татарстан.', image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png', favorite: false }
  ];

  getCities(): City[] {
    return this.cities;
  }
  addCity(city: City): void {
    this.cities.push(city);
  }

  toggleFavorite(cityId: number): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.favorite = !city.favorite;
    }
  }
}
