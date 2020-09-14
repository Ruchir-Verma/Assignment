import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-update-rooms',
  templateUrl: './update-rooms.component.html',
  styleUrls: ['./update-rooms.component.css']
})
export class UpdateRoomsComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }

  guests   : string;
  roomType : string;
  checkIn  : string;

    x;
    y;
    z;
   submit(){


this.FlaskApiService.update_rooms(this.roomType,this.guests,this.checkIn).subscribe(
      res => {
        console.log(res);
        this.x=res['roomType'];
        this.y=res['Capacity-Increased'];
        this.z=res['Date'];

        alert("Capacity Changed = " + this.y+" , "+this.x+", "+this.z);

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
