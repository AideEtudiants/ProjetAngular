
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http:HttpClient) {  }
  getMessage() : Observable<any>{
    return this.http.get("http://localhost:8080/hello",{responseType: 'text'});
  }
}
