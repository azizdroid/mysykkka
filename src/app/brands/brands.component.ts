import { Component, OnInit, Input } from '@angular/core';
import { HttpMakeupService } from '../http-makeup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'child',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  mydata: any;
  isDisplay = true;
  onepro: any;
 
  myprobrand: any;  
  selectedLevel="lipstick";
 togglefunction():any{
  this.isDisplay = !this.isDisplay;
};

 
  totalnumber: any;
brand:any;
product_Type:any;
  constructor(private _route:ActivatedRoute,private router: Router,public httpmakeupService:HttpMakeupService) { }
public productdata = ["lipstick","Blush","Eyeliner","Lip liner","Mascara","Foundation","Eyebrow","Eyeshadow"];

public selected(){
  console.log(this.selectedLevel)

  let myprobrand= this.selectedLevel;

console.log(myprobrand);
}
  ngOnInit(): void {
    console.log("home ng Onit is called");}
 onEmployeeSelected(val:any){
   this.customFunction(val);
 }

   // this.mydata= this.httpmakeupService.getmydata();
customFunction(val:any){
   this.httpmakeupService.getmybranddata(this.selectedLevel).subscribe(
    data =>{
console.log("data returned from server" , data);
this.mydata = data; 
    },
    error =>{
      console.log("some error occured")
      console.log(error.errorMessage);
    }
    
    )
  }
  }
  
