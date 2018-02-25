import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {
private data:any;

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://pencilstore-61e9f.firebaseio.com/.json')
    .map((response: Response) => response.json());
  }

}
