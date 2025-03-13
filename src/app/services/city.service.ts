import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { City } from '../city.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [];
  private readonly STORAGE_KEY = 'cities';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCitiesFromStorage();
    } else {
      this.cities = [
        { id: 1, name: 'Москва', description: 'Столица России, город федерального значения', image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png', favorite: false },
        { id: 2, name: 'Санкт-Петербург', description: 'Второй по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png', favorite: false },
        { id: 3, name: 'Новосибирск', description: 'Третий по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png', favorite: false },
        { id: 4, name: 'Екатеринбург', description: 'Город-миллионник в России. Тоже красивый город', image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png', favorite: false },
        { id: 5, name: 'Нижний Новгород', description: 'Город в центральной России. Красивый город.', image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png', favorite: false },
        { id: 6, name: 'Челябинск', description: 'Город в Российской Федерации, седьмой по количеству жителей', image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png', favorite: false },
        { id: 7, name: 'Казань', description: 'Город в России, столица Республики Татарстан.', image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png', favorite: false }
      ];
    }
  }

  private loadCitiesFromStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedCities = localStorage.getItem(this.STORAGE_KEY);
      if (storedCities) {
        try {
          const parsedCities = JSON.parse(storedCities);
          if (Array.isArray(parsedCities) && parsedCities.every(city =>
            typeof city.id === 'number' &&
            typeof city.name === 'string' &&
            typeof city.description === 'string' &&
            typeof city.image === 'string' &&
            typeof city.favorite === 'boolean'
          )) {
            this.cities = parsedCities;
          } else {
            throw new Error('Invalid city data in localStorage');
          }
        } catch (error) {
          console.error('Failed to parse cities from localStorage:', error);
          this.resetToDefaultCities();
        }
      } else {
        this.resetToDefaultCities();
      }
    }
  }

  private saveCitiesToStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cities));
    }
  }

  private resetToDefaultCities(): void {
    this.cities = [
      { id: 1, name: 'Москва', description: 'Столица России, город федерального значения', image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png', favorite: false },
      { id: 2, name: 'Санкт-Петербург', description: 'Второй по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png', favorite: false },
      { id: 3, name: 'Новосибирск', description: 'Третий по численности населения город России', image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png', favorite: false },
      { id: 4, name: 'Екатеринбург', description: 'Город-миллионник в России. Тоже красивый город', image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png', favorite: false },
      { id: 5, name: 'Нижний Новгород', description: 'Город в центральной России. Красивый город.', image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png', favorite: false },
      { id: 6, name: 'Челябинск', description: 'Город в Российской Федерации, седьмой по количеству жителей', image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png', favorite: false },
      { id: 7, name: 'Казань', description: 'Город в России, столица Республики Татарстан.', image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png', favorite: false }
    ];
    this.saveCitiesToStorage();
  }

  getCities(): City[] {
    return this.cities;
  }

  addCity(city: City): void {
    this.cities.push(city);
    this.saveCitiesToStorage();
  }

  toggleFavorite(cityId: number): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.favorite = !city.favorite;
      this.saveCitiesToStorage();
    }
  }
}
