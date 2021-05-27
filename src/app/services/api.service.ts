import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  serviceUrl = 'https://localhost:5001/api';

  constructor(
    private http: HttpClient
  ) { }


  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })

  }

  public localTest(){
    try{
      let robot = {
        "name":"Eva01",
        "pilot":"Shinji"
      }
      return robot;

    }catch(ex){
      console.log(ex);
      return ex;
    }
  }

  public testGet(){
    try{
      return this.http.get(this.serviceUrl + '/api/hello');
    }catch(ex){
      console.log(ex);
      return ex;
    }
  }
  
  
  public saveToDoItem(data){
    try{
      return this.http.post(this.serviceUrl + '/TodoItems',data);
    }catch(ex){
      console.log(ex);
      return ex;
    }
  }

}
