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

 myprod;
  constructor(private router:Router,private route:ActivatedRoute,private service2:AppService,private http:HttpClient,private service:HttpService,private authservice:AuthenticationServiceService) { }
  ngOnInit() {
    this.service2.getinfo().subscribe(data=>{
      this.myprod=data;
    });
  }
  orders()
  {
    this.router.navigate(['/orderdetails']);
  }

}
