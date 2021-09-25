import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello';
import { HelloService } from '../hello-service.service';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponent implements OnInit {
  hello = new Hello('') ; 
  constructor(private service : HelloService) { }

  ngOnInit(): void {
    console.log(this.hello)
    this.service.getMessage().subscribe(data =>{
       this.hello = data;
       console.log(this.hello)
  
    });
    
  }

}
