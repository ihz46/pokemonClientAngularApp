import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './Ipokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/'
    return this.http.post<Pokemon>(url, pokemon);

  }
  updatePokemon(id: number, nombre: string): Observable<Pokemon> {
    throw new Error("Method not implemented.");
  }



  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }//Constructor

  //Obtenemos el listado de todos los pokemons
  getAll(): Observable<any> {
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/'
    console.trace('PokemonService getAll ' + url);
    return this.http.get(url);
  }

  //Pasamos como parámetro una parte del nombre 
  getPokemon(nombre: string): Observable<any> {

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }
  getCaracteristicas(id: number): Observable<Pokemon> {
    throw new Error("Method not implemented.");
  }
  getById(id: number) {
    throw new Error("Method not implemented.");
  }







}
