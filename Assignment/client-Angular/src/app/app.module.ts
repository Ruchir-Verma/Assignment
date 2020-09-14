import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { UpdateRoomsComponent } from './update-rooms/update-rooms.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    HomepageComponent,
    UserLoginComponent,
    UserHomepageComponent,
    RoomBookingComponent,
    AdminLoginComponent,
    AdminHomepageComponent,
    AddRoomsComponent,
    UpdateRoomsComponent,
    ViewReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
