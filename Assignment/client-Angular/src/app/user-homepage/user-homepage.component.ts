import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }

  Customer : string;
  roomType : string;
  checkIn  : string;
  checkOut : string;
  guests   : string;



  x;
  submit(){

this.FlaskApiService.check_availability(this.Customer,this.roomType,this.checkIn,this.checkOut,this.guests).subscribe(
      res => {
        console.log(res);
        this.x=res;
        console.log(this.x);
        if (this.x==false)
      {
      console.log(this.x)
       alert("Rooms are not available of this type on these dates !")
      }
      else
      {
        alert("Rooms are available ,you can proceed!")
      }
      }
);
}
book()
{

this.router.navigate(['/booking']);
}

logout()
{
this.router.navigate(['/']);
}

  ngOnInit(): void {
  }

}
