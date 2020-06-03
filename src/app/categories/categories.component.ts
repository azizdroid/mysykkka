import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
@Input() store:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  
  OnSearchChange(searchValue:any):void{
    
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand="+searchValue)
    .then(response => response.json())
    .then(res =>{
      console.log(res);
      this.store=res
    });
console.log(searchValue);

  }
}
