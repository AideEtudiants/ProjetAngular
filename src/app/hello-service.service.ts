import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hello } from './hello';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private http:HttpClient) {  }
  getMessage() : Observable<Object>{
    return this.http.get("http://localhost:8080/hello");
  }
}
