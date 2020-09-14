import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }

  username : string;
  password : string;
  x;
   submit(){


this.FlaskApiService.admin_login(this.username,this.password).subscribe(
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
        this.router.navigate(['/adminhomepage']);
      }
      }


);



  }

  ngOnInit(): void {
  }

}
