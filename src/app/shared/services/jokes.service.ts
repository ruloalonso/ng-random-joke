import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/joke.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  
  constructor(private http: HttpClient) { }

  url = 'https://api.chucknorris.io/jokes/random';

  getRandomJoke():Observable<Joke> {
    return this.http.get<Joke>(this.url);
  }
}
