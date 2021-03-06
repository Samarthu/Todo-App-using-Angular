import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  constructor(private http :HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';
  product() :Observable<any>{
    return this.http.get(this.url);
  }
}
