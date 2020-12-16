import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colors } from '../interfaces/colors';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  url:string = 'https://reqres.in/api';

  constructor(private http:HttpClient) { }

  getColors(page:number){
    return this.http.get(`${this.url}/colors?page=${page}`).pipe(map((data:Colors) => {
      return data;
    }))
  }
}
