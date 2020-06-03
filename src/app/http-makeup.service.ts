import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from "rxjs";
@Injectable(
  {
    providedIn: 'root'
  }
)

export class HttpMakeupService {
public mydata;
public proid;
public baseUrl= 'https://makeup-api.herokuapp.com/api/v1/products'
  constructor(private _http:HttpClient) {
    console.log("makeup http service called");
   }
    //exception handler
  
  private handleError(err : HttpErrorResponse) {
    console.log("handle errors http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }


   public getmydata():Observable<any>{
    let myResponse = this._http.get<any>(this.baseUrl+'.json');
    console.log(myResponse);
    return myResponse;
  }  
  public getmybranddata(currentbrand):Observable<any>{
    let myResponse = this._http.get<any>(this.baseUrl+'.json?&product_type='+currentbrand);
    console.log(myResponse);
    return myResponse;
  }  
 
  public getsingleproductinfo(currentproid):Observable<any>{
    let myResponse = this._http.get<any>(this.baseUrl+'/'+currentproid+'.json');
  console.log(myResponse);
  return myResponse;
  }
}
