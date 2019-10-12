import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {products} from'./products.constant';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
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
