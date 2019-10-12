import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  prodid;
  products;
cart;
  constructor(private router: Router, private service: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    return this.service.showCart().subscribe((data) => {
      this.cart = data;
    });

  }
  deleteproduct(id)
  {
    this.service.DeleteProduct(id).subscribe((data)=>{this.service.showCart().subscribe((data1)=>{this.cart=data1;});});
  }
  decreaseproduct(rid:number)
  {
    this.service.removeproductFromCart(rid).subscribe((data)=>{this.service.showCart().subscribe((data2)=>{this.cart=data2;});});
  }
increaseproduct(aid:number)
{
  this.service.addProductToCart(aid).subscribe((data)=>{this.service.showCart().subscribe((data3)=>{this.cart=data3;});});
}
  }

