import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { RouterModule } from '@angular/router';
import { MakeupService } from './makeup.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpMakeupService } from './http-makeup.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductfilterPipe } from './productfilter.pipe';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    
    ProductfilterPipe,
    
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([])
  ],
   providers: [MakeupService,HttpMakeupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
