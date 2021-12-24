import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumEntity } from 'src/app/Entity/ForumEntity';
import { AnswertEntity } from 'src/app/Entity/AnswerEntity';


@Injectable({

  providedIn: 'root'

})

export class ForumService {

  constructor(private http:HttpClient) {  }

   getAllForums(): Observable <any>{
    return this.http.get<any>("http://localhost:8080/forum/listForum");
  }
  
  listAnswerByForum(idForum:number): Observable<AnswertEntity>{
    return this.http.post<AnswertEntity>("http://localhost:8080/forum/listAnswerByForum",idForum);
  }

  updateAnswer(answer:AnswertEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/updateAnswer",answer);
  }

  updateForum(forum:ForumEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/updateForum",forum);
  }

  addForum(newForum:ForumEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/createForum",newForum);
  }

  deleteForum(idforum: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/deleteForum",idforum);
  }

  deleteAnswer(idanswer: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/deleteAnswer",idanswer);
  }

  addAnswerToForum(answer:AnswertEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/forum/addAnswerToForum",answer);
  }

  
}
