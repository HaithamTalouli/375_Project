import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

interface User{
  username: string,
  email: string,
  password: string
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  static user: User = {
    username: " ",
    email: " ",
    password: " "
  };

  constructor(private _http:HttpClient) { }

  //connect frontend

  apiUrl = 'http://talouli.com:8080';

  //get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}/allusers`);
  }

  //create data

  createData(data:any):Observable<any>
  {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}/user`,data);
  }

  getSingleUser(email:any):Observable<any>
  {
    return this._http.get(`${this.apiUrl}/user/${email}`);
  }
  //delete data

  deleteData(email:any):Observable<any>
  {
    return this._http.delete(`${this.apiUrl}/user/${email}`);
  }

  //setter

  static setUser(rawJSON: Object){
    var str = JSON.stringify(rawJSON);
      var parsedStr = "";
      var previousChar;
      for(var i = 0; i < str.length; i++){
        if(str[i] === ']'){
          break;
        }
        if(previousChar === '['){
          parsedStr += str[i];
        }
        else{
          previousChar = str[i];
        }
      }
      ApiserviceService.user = JSON.parse(parsedStr); 
  }

  static setRegisteredUser(username: string, email: string, password: string){
    ApiserviceService.user.username = username;
    ApiserviceService.user.email = email;
    ApiserviceService.user.password = password;
  }

  static emptyUser() {
    ApiserviceService.user.username = '';
    ApiserviceService.user.email = '';
    ApiserviceService.user.password = '';
  }
}
