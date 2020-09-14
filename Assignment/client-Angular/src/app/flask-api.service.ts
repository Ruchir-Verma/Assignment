import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FlaskApiService {

  constructor(private httpClient: HttpClient) { }

  register(username:string,password:string,email:string,mobile:string) :Observable<any>{
  const params = {

      'username': username,
      'password': password,
      "email": email,
      "mobile" : mobile
    }
   console.log(params)
   return this.httpClient.post('http://127.0.0.1:5000/register',params);

  }
  user_login(username:string,password:string) :Observable<any>{
  const params = {
  'username' : username,
  'password' : password

  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/login',params)

  }
  check_availability(Customer:string,roomType:string,checkIn:string,checkOut:string,guests:string) : Observable<any>{
  const params = {
  'Customer' : Customer,
  'roomType' : roomType,
   'checkIn' : checkIn,
   'checkOut': checkOut,
   'guests'  : guests

  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/available',params)

  }

 book_room(Customer:string,roomType:string,checkIn:string,checkOut:string,guests:string) : Observable<any>{
  const params = {
  'Customer' : Customer,
  'roomType' : roomType,
   'checkIn' : checkIn,
   'checkOut': checkOut,
   'guests'  : guests

  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/book',params)

  }

admin_login(username:string,password:string) :Observable<any>{
  const params = {
  'username' : username,
  'password' : password

  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/admin',params)

  }


  add_rooms(roomType:string) :Observable<any>{
  const params = {
  'roomType' : roomType


  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/add_rooms',params)

  }

   update_rooms(roomType:string,guests:string,checkIn:string) :Observable<any>{
  const params = {
  'roomType' : roomType,
  'guests'   : guests,
  'checkIn'  : checkIn


  }
  console.log(params)
  return this.httpClient.put('http://127.0.0.1:5000/update',params)

  }
view_report(checkIn:string) :Observable<any>{
  const params = {

  'checkIn'  : checkIn


  }
  console.log(params)
  return this.httpClient.post('http://127.0.0.1:5000/fetch',params)

  }

}
