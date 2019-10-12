import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ClothesComponent } from './clothes/clothes.component';
import { BooksComponent } from './books/books.component';
import { ElectronicsComponent } from './electronics/electronics.component';

import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home',component:HomePageComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {
    path:'cart',component:UserCartComponent
  },

  {
    path:'products',component:ProductListComponent
  },



  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
