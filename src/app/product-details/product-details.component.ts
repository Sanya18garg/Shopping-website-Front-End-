import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public id;
result:any;
  constructor(private route:ActivatedRoute,private service:DataService) {
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id');
this.service.getbyId(this.id).subscribe(response=>{this.result=response;console.log(this.result);
//this.router.navigate(['/productdetails',id]);
});
   });
   }

  ngOnInit() {
    //let id=parseInt(this.route.Snapshot.parseMap.get('id'));
   // this.route.paramMap.subscribe(params=>{ let id=parseInt(params.get('id'));
   // this.ID=id;
  //});
  
  
  }
  
}


