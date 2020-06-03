import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  
  {
    path:'categories',component:CategoriesComponent
  },
  {
    path:'brands',component:BrandsComponent
  },
  {
    path:'thing/:id',component:ProductsComponent
    
  },
  {
    path:'thing/:product_type',component:BrandsComponent
    
  },

{path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
