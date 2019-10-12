import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {AuthenticationServiceService} from "../authentication-service.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name;
  password;
  email;
  phone;
  address;
  is_seller:boolean
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient,private service:HttpService,private authservice:AuthenticationServiceService) { }
  error=false;
  url="http://localhost:8090/logout/userinfo";
  ngOnInit() {
    if(!this.service.checklogin())
    {
      this.router.navigate(['products']);
    }
    this.getuserinfo();
  }
  getuserinfo()
  {
    let email=sessionStorage.getItem("email");
    let temp=email.split('@');
    console.log(temp[0]);
    console.log(temp[1]);
    let emailname=temp[0];
    let emailid=temp[1].split(".")[0];
    let domain=temp[1].split(".")[1];
    let url1=this.url+emailname+"/"+emailid+"/"+domain;
    this.http.get(url1).subscribe(res=>{
      this.name=res;
      this.address=res;
      this.email=res;
      this.phone=res;
      this.password=res;
      //this.is_seller=res.is_seller;

    });

  }
url1="http://localhost:8090/logout/logout";
  logout()
  {
    if(this.service.checklogin())
    {
      this.authservice.logoutService();
      this.http.get(this.url1).subscribe(res=>{
        alert("logout successful");
      });
      alert("logout Successful");
      this.router.navigate(["products"]);
    }
  }
  checklogin()
  {
    return this.service.checklogin();
  }
  red()
  {
    this.router.navigate(['products']);
  }
  gotocart()
  {
    this.router.navigate(['cart']);
  }
  productname;
  productprice;
  productcategory;
  productdetails;
  productbrand;
  productimage;
  producturl="http://localhost:8090/products/addproducts";
  senddata()
  {
    let json={
      name:this.productname,
      brand:this.productbrand,
      price:this.productprice,
      details:this.productdetails,
      category:this.productcategory,
      image:this.productimage

    }
    this.http.post(this.producturl,json).subscribe((res=>{
      console.log(json);
    }));
  }
  gotohistory()
  {
    this.router.navigate((['history']));
  }


}
