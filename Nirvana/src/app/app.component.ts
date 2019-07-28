import { Component } from '@angular/core';
import { OMDBServiceService } from './omdbservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  year: number;
  type = '';
  movie: any[];
  movieDetails: any[];
  test = false;

constructor(private omdb: OMDBServiceService) { }


  selectType(event: any){
    this.type = event.target.value;
  }

  searchMovie() {
    this.test = false;
    this.omdb.searchMovie(this.title, this.type, this.year)
    .subscribe
    (
      data => {
        this.movie = data;
      }
    );
  }

  getDetails() {
  this.test = true;
  }
}
