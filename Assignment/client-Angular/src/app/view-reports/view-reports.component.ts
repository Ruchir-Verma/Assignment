import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  constructor(private router: Router,private FlaskApiService : FlaskApiService) { }

  checkIn : string;
  x;

   submit(){


this.FlaskApiService.view_report(this.checkIn).subscribe(
      res => {
        console.log(res);
        this.x=res['Bookings'];


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
