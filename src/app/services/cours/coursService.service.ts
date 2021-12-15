import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursEntity } from 'src/app/Entity/coursEntity';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) {  }
  getAllCours() : Observable<CoursEntity[]>{
    return this.http.get<CoursEntity[]>("http://localhost:8080/class/list");
  }
  getCoursById(idCours: number):Observable<CoursEntity>{
    return this.http.post<CoursEntity>(`http://localhost:8080class`,idCours);
  }
  addCours(newCours:CoursEntity ):Observable<CoursEntity>{
    return this.http.post<CoursEntity>("http://localhost:8080/class/add",newCours);
  }
  deleteClass(idCours: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/class/deleteClass",idCours);
  }

}