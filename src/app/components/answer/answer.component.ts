import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerEntity } from 'src/app/Entity/AnswerEntity';
import { ForumEntity } from 'src/app/Entity/ForumEntity';
import { ForumAnswerService } from 'src/app/services/forum/forumService.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  forum:ForumEntity;
  answer:AnswerEntity=new AnswerEntity(null,1,4,'',null);

  constructor(private router: Router,private rout: Router,
    protected forumService:ForumAnswerService, protected toastService : ToastrService) { }

  ngOnInit(): void {
    
  }

  onNoClick(){
    this.router.navigate(["/forum"]);
  }

  repondre(){
    console.log(this.answer);
    this.forumService.addAnswerToForum(this.answer)
    .subscribe({
        next :(data)=>{
            this.toastService.success('La reponse a ete ajouter')
        },
        error :()=>  this.toastService.error('Erreur lors de lajout')

    });
    this.rout.navigate(["/forum"]);
}

  }

