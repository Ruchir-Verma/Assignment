import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }


  username : string;
  password : string;
  email    : string;
  mobile   : string;

  x;
  submit(){
   /*this.FlaskApiService.register(this.username,this.password,this.email,this.mobile).subscribe((resp: any) => {
 console.log(resp)

})*/

this.FlaskApiService.register(this.username,this.password,this.email,this.mobile).subscribe(
      res => {
        console.log(res);
         this.x=res;
        console.log(this.x);
         if (this.x==false)
      {
      console.log(this.x)
       alert("Username already exists!")
      }
      else
      {
       alert("Registration Successful!")
        this.router.navigate(['/login']);
      }
      }
);

  }


  ngOnInit(): void {
  }

}
