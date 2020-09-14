import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent} from './user-register/user-register.component'
import {HomepageComponent} from './homepage/homepage.component'
import {UserLoginComponent} from './user-login/user-login.component'
import {UserHomepageComponent} from './user-homepage/user-homepage.component'
import {RoomBookingComponent} from './room-booking/room-booking.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'
import {UpdateRoomsComponent} from './update-rooms/update-rooms.component'
import {ViewReportsComponent} from './view-reports/view-reports.component'
import {AddRoomsComponent} from './add-rooms/add-rooms.component'
import {AdminHomepageComponent} from './admin-homepage/admin-homepage.component'

const routes: Routes = [
{path : 'registration',
component : UserRegisterComponent},

{path : '',
component : HomepageComponent},

{path : 'login',
component : UserLoginComponent},

{path : 'userhomepage',
component : UserHomepageComponent},

{path : 'booking',
component : RoomBookingComponent},

{path : 'admin',
component : AdminLoginComponent},

{path : 'add_rooms',
component : AddRoomsComponent},

{path : 'update',
component : UpdateRoomsComponent},

{path :'fetch',
component : ViewReportsComponent},
{path :'adminhomepage',
component : AdminHomepageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
