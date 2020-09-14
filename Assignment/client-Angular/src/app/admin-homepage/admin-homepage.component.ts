import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlaskApiService } from '../flask-api.service';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  constructor(private router: Router) { }
   add_rooms(){
  this.router.navigate(['/add_rooms']);
  }
   update_capacity(){
  this.router.navigate(['/update']);
  }
   view_reports(){
  this.router.navigate(['/fetch']);
  }
logout()
{
this.router.navigate(['/']);
}
  ngOnInit(): void {
  }

}
