import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassEntity } from 'src/app/Entity/ClassEntity';
import { ClassUser } from 'src/app/Entity/ClassUser';




@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) {  }
  getAllClass() : Observable< any>{
    return this.http.get<any>("http://localhost:8080/class/list");
  }
  getClassById(idClass: number):Observable< ClassEntity>{
    return this.http.post< ClassEntity>(`http://localhost:8080/class`,idClass);
  }
  addClass(newClass: ClassEntity ):Observable< ClassEntity>{
    return this.http.post< ClassEntity>("http://localhost:8080/class/add",newClass);
  }
  deleteClass(idClass: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/class/deleteClass",idClass);
  }
  listClassByUser(idUser: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/class/listClassByUser",idUser);
  }
  addUserToClass( Class: ClassUser):Observable<any>{
    return this.http.post<any>("http://localhost:8080/class/addUserToClass", Class);
  }
  updateClass(classe:ClassEntity):Observable<any>{
     return this.http.post<any>("http://localhost:8080/class/update",classe);
  }

}