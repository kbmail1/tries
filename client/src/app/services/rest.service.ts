import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as RestInterfaces from '@common/IRest'
import { Observable } from 'rxjs';

const port = 3000
const host = 'localhost'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) {

  export const getChatters = () => {
    this.http.get(`http://${host}:${port}/chatters`)
      .subsdcribe((data) => {
        console.log(data);
      }
    }
}
