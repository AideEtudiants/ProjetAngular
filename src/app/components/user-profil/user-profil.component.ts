import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassEntity } from 'src/app/Entity/classEntity';
import { ClassService } from 'src/app/services/class/classService.service';
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
  product: ProductEntity[];
  class: ClassEntity[];

  constructor(private userService: UserService) {}

  ngOnInit():void {
    this.userService.getUserById(4).subscribe(data=>{
      this.user=data;
      console.log(this.user)
    });

    this.userService.getProductAdd(4).subscribe(data=>{
        this.product=data;
        console.log(this.product)
    });

    this.userService.getClassAdd(4).subscribe(data=>{
      this.class=data;
      console.log(this.class)
    });
  }

  deleteProduct(prod: ProductEntity){
    console.log(prod);
    let confirmation = confirm("Etes-vous sûr de vouloir supprimer ce produit?");
    if(confirmation) {
      const index = this.product.indexOf(prod, 0);
      if(index > -1) {
        this.product.splice(index, 1);
      }
    }
  }

  deleteClass(clas: ClassEntity){
      console.log(clas);
      let confirmation = confirm("Etes-vous sûr de vouloir supprimer ce cours?");
      if(confirmation) {
        const index = this.class.indexOf(clas, 0);
        if(index > -1) {
          this.class.splice(index, 1);
        }
      }
    }

}

