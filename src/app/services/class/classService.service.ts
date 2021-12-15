import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { classEntity } from 'src/app/Entity/classEntity';

@Injectable({
  providedIn: 'root'
})
export class classService {

  constructor(private http:HttpClient) {  }
  getAllClass() : Observable<classEntity[]>{
    return this.http.get<classEntity[]>("http://localhost:8080/class/all");
  }
  getClassById(idClass: number):Observable<classEntity>{
    return this.http.get<classEntity>(`http://localhost:8080/class/${idClass}`);
  }
  addClass(newClass:classEntity ):Observable<classEntity>{
    return this.http.post<classEntity>("http://localhost:8080/class/create",newClass);
  }
  deleteUserFromClass(newClass:classEntity):Observable<classEntity>{
    return this.http.post<classEntity>("http://localhost:8080/Cours",newClass);
  }
  updateClass(classe:classEntity):Observable<classEntity>{
    return this.http.post<classEntity>("http://localhost:8080/class/update",classe);
  }

}