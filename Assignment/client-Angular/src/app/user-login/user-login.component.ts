import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {



  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }


  username : string;
  password : string;

  register(){
  this.router.navigate(['/registration']);
  }

   x;

  submit(){


this.FlaskApiService.user_login(this.username,this.password).subscribe(
      res => {
        console.log(res);
        this.x=res;
        console.log(this.x);
        if (this.x==false)
      {
      console.log(this.x)
       alert("Please check credentials !")
      }
      else
      {
        this.router.navigate(['/userhomepage']);
      }
      }


);



  }


  ngOnInit(): void {
  }

}
