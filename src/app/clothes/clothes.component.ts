import { Component, OnInit } from '@angular/core';
import {products} from "./products.constants";
import {Router} from '@angular/router';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
products=products;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  func(id)
{
  this.router.navigate(['/productdetails',id]);
}
func1(id)
{
  this.router.navigate(['/cart',id]);
}

}
