import { Component, OnInit ,Input} from '@angular/core';
import { DataServiceService} from '../data-service.service';


@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  constructor(private dataservice : DataServiceService ) { }
  @Input() data1 :number= 0;
  @Input() ids:number[]=[];
  productDetails = [];
  products = [];
     ngOnInit(): void {
      this.dataservice.product().subscribe( productData => this.productDetails = productData );
  }
  print()
  {
    for(let i =0 ; i<this.productDetails.length ;i++)
    {
      console.log(this.productDetails[i]); 
    }
    console.log(this.ids.flat());
  } 
  apiData()
  {

  }
}
