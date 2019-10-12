import { Component, OnInit } from '@angular/core';
import {products} from './products.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
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
