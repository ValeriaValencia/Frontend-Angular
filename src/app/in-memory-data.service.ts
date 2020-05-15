import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', favoriteFood :'espinacas' },
      { id: 12, name: 'Narco', favoriteFood :'espinacas' },
      { id: 13, name: 'Bombasto', favoriteFood :'espinacas'  },
      { id: 14, name: 'Celeritas', favoriteFood :'espinacas' },
      { id: 15, name: 'Magneta', favoriteFood :'espinacas' },
      { id: 16, name: 'RubberMan', favoriteFood :'espinacas' },
      { id: 17, name: 'Dynama', favoriteFood :'espinacas' },
      { id: 18, name: 'Dr IQ', favoriteFood :'espinacas' },
      { id: 19, name: 'Magma', favoriteFood :'espinacas' },
      { id: 20, name: 'Tornado', favoriteFood :'espinacas' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}