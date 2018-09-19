import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { Joke } from '../../shared/models/joke.model';

@Component({
  selector: 'app-joke-header',
  templateUrl: './joke-header.component.html',
  styleUrls: ['./joke-header.component.css']
})
export class JokeHeaderComponent implements OnInit {

  joke: Joke;

  constructor(private jokeService: JokesService) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  getRandomJoke() {
    this.jokeService.getRandomJoke().subscribe((myJoke: Joke) => {
      this.joke = myJoke;
    })
  }

}
