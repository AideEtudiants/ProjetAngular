import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumEntity } from 'src/app/Entity/ForumEntity';
import { ForumService } from 'src/app/services/forum/forumService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
 ForumList  : ForumEntity [];

  constructor(private router: Router,protected forumservice: ForumService, protected toastService : ToastrService,) { }

  ngOnInit(): void {
  }

  onQuiz(){
    this.router.navigate(['/question']);
  }

  getAllForums(){
    this.forumservice.getAllForums()
      .subscribe((data:ForumEntity [] )=>{
        this.ForumList = data;
        console.log(this.ForumList);
        },
    (error:HttpErrorResponse)=>{
        alert(error.message)
        this.toastService.error('Erreur');
        }
    );
  }
  

}
