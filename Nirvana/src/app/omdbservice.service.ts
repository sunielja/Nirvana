import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OMDBServiceService {
  title: string;
  type: string;
  year: number;
  constructor(private http: HttpClient) { }

  searchMovie(title: string, type: string, year: number): Observable<any> {
    this.title = title;
    this.type = type;
    this.year = year;
    const url = 'http://www.omdbapi.com/?s=' + this.title + '&type=' + this.type + '&y=' + this.year + '&apikey=2d2c9886';

    const u = 'http://www.omdbapi.com/?' + this.title + '&type=movie&y=2000&apikey=2d2c9886';
    return this.http.get(url);
  }
}
