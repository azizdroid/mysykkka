import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MakeupService } from '../makeup.service';
import { HttpMakeupService } from '../http-makeup.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public proselected:any;
public  proid;
currentproid:any;
  constructor(private _route:ActivatedRoute,private router: Router,public makeupService:MakeupService,public httpmakeupService:HttpMakeupService) {
    console.log("constructor is called")
    
       }
      ngOnInit(): void {
       
    console.log("ngOnInIt is called");
    //GETTING THE BLOG ID FROM THE ROUTE
   let myproid = this._route.snapshot.paramMap.get('id');
    console.log(myproid);
   
    

    this.httpmakeupService.getsingleproductinfo(myproid).subscribe(
      data =>{
console.log("data returned from server" , data);
this.proid = data; 
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage);
      }
      
      )
    }
  }
