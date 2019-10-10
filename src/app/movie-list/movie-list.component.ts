import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  listNameMovie = 'Movies List'; 

  showMovies : boolean = true;

  constructor() { }

  ngOnInit() {
  }
}
