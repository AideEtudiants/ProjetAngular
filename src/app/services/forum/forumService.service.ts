import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumEntity } from 'src/app/Entity/ForumEntity';
import { AnswerEntity } from 'src/app/Entity/AnswerEntity';


@Injectable({

  providedIn: 'root'

})

export class ForumAnswerService {

  constructor(private http:HttpClient) {  }

   getAllForums(): Observable <ForumEntity[]>{
    return this.http.get<ForumEntity[]>("http://localhost:8080/question/listForum");
  }
  
  listAnswerByForum(idForum:number): Observable<AnswerEntity>{
    return this.http.post<AnswerEntity>("http://localhost:8080/question/listAnswerByForum",idForum);
  }

  updateAnswer(answer:AnswerEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/updateAnswer",answer);
  }

  updateForum(forum:ForumEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/updateForum",forum);
  }

  addForum(newForum:ForumEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/createForum",newForum);
  }

  deleteForum(idforum: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/deleteForum",idforum);
  }

  deleteAnswer(idanswer: number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/questiondeleteAnswer",idanswer);
  }

  addAnswerToForum(answer:AnswerEntity):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/addAnswerToForum",answer);
  }

  findForumById(idforum:number):Observable<any>{
    return this.http.post<any>("http://localhost:8080/question/getforum",idforum);
  }

  
}
