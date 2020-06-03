import { Component, OnInit } from '@angular/core';

import { HttpMakeupService } from '../http-makeup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 
export class HomeComponent implements OnInit {
  public mydata:any;
 
 searchTerm:string;
  totalnumber: any;

  constructor(public httpmakeupService:HttpMakeupService){
    console.log("home constructor is being called")
  }
   
  ngOnInit(): void {
      console.log("home ng Onit is called");
     // this.mydata= this.httpmakeupService.getmydata();
     this.mydata = this.httpmakeupService.getmydata().subscribe(
       data =>{ 
         console.log("data returned from the server",data);
         console.log("logging data");
         this.mydata = data; 
this.totalnumber = data.length
       },
       error =>{
         console.log("some error occured");
         console.log(error.errorMessage);
       }
     )
      console.log(this.mydata);
    }
  }

