import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {



constructor(private router: Router,private FlaskApiService : FlaskApiService) { }
  Customer : string;
  roomType : string;
  checkIn  : string;
  checkOut : string;
  guests   : string;

   x;
   submit(){


this.FlaskApiService.book_room(this.Customer,this.roomType,this.checkIn,this.checkOut,this.guests).subscribe(
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
        alert("Booking is Successful !")
      }
      }
);

}


logout()
{
this.router.navigate(['/']);
}

  ngOnInit(): void {
  }

}
