import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }

  roomType:string;

  x;
   submit(){


this.FlaskApiService.add_rooms(this.roomType).subscribe(
      res => {
        console.log(res);
        this.x=res;
        console.log(this.x);
        if (this.x==true)
      {
      console.log(this.x)
       alert("Rooms of "+this.roomType+" type are added")
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
