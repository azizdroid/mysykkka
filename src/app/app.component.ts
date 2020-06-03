import { Component } from '@angular/core';
import { HttpMakeupService } from './http-makeup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public mydata:any;
  title = 'mysykkka';
  public thing:any;
   hover = false;
  hover1= false;
  searchTerm: string;

store:any[]=[];
hover2= false;hover3= false;hover4= false;
public newclass: any = {
  color:"pink",
  }
  constructor(public httpmakeupService:HttpMakeupService){
    const unique_brand = Array.from(new Set(this.mydata));
    console.log(unique_brand);
      }
  
  navclass: any;
  OnSearchChange(searchValue:any):void{
    
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand="+searchValue)
    .then(response => response.json())
    .then(res =>{
      console.log(res);
      this.store=res
    });
console.log(searchValue);

  }
togglefunction(){
  
}
  }
