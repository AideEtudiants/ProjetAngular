import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassEntity } from 'src/app/Entity/classEntity';
import { ProductEntity } from 'src/app/Entity/ProductEntity';
import { User } from 'src/app/Entity/UserEntity';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  user: User;
  product:ProductEntity[];
  cours: ClassEntity[];
  constructor( private userService: UserService) {}

  ngOnInit():void {
    this.userService.getUserById(4).subscribe(data=>{
      this.user=data;
      console.log( this.user)
    });

    this.userService.getProductAdd(4).subscribe(data=>{
        this.product=data;
        console.log(this.product)
    });
    this.userService.getCoursAdd(4).subscribe(data=>{
      this.cours=data;
      console.log(this.cours)
  });

  }
}

