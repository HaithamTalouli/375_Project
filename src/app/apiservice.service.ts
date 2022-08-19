import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data

  createData(data:any):Observable<any>
  {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
  }

  getSingleUser(data:any):Observable<any>
  {
    return this._http.get(`${this.apiUrl}/${data}`);
  }
  //delete data

  deleteData(data:any):Observable<any>
  {
    return this._http.delete(`${this.apiUrl}/${data}`);
  }

  //setter

  static setUser(rawJSON: Object){
    console.log("this is the raw json");
    console.log(rawJSON);
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
      console.log(ApiserviceService.user);
  }

  static setRegisteredUser(username: string, email: string, password: string){
    ApiserviceService.user.username = username;
    ApiserviceService.user.email = email;
    ApiserviceService.user.password = password;
    console.log(ApiserviceService.user);
  }
}
