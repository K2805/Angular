import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {
  res:any;
  name:any;
  constructor() { }

  ngOnInit() {
  }
  checkLogin(form){
    console.log(form.value.username);
	console.log(form.value.password);
	this.user.checkLogin(form).subscribe((res:any)=>{  		
  		this.router.navigate(['/home']) 
  	})
	
  }
}
