import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  visitor(){
  this.router.navigate(['/login']);
  }
  admin(){
  this.router.navigate(['/admin']);
  }


  ngOnInit(): void {
  }

}
