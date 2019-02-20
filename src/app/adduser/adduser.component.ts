import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[UsersService]
})
export class AdduserComponent implements OnInit {
  res:any;
  name:any;
  constructor(private user: UsersService,private router: Router) { }

  ngOnInit() {}
  
   createUser(form){
    //console.log(form.value.fname);
	this.user.createuser(form).subscribe((res:any)=>{
  		this.res = res;
  		this.router.navigate(['/apis']) 
  	})
  }
  
  

}
