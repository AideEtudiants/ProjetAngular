import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForumEntity } from 'src/app/Entity/ForumEntity';
import { ForumAnswerService } from 'src/app/services/forum/forumService.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  options: any=[];
  data:any='';

  constructor(private router: Router, protected forumService:ForumAnswerService, protected toastService : ToastrService,) { }

  ngOnInit(): void {

  }

  onNoClick(){
    this.router.navigate(["/forum"]);
  }

  addForum(forum:ForumEntity){
    this.forumService.addForum(forum)
    .subscribe({
        next :(data)=>{
            this.toastService.success('La question a ete ajouter')
        },
        error :()=>  this.toastService.error('Erreur lors de lajout')

    });
}

}
