import { Component, OnInit } from '@angular/core';
import { NewsbplService } from '../Service/newsbpl.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {
       bussinessdata:any;
  constructor(private newsbpl:NewsbplService) { }

  ngOnInit(): void {
    this.newsbpl.bussiness().subscribe(result=>{
      console.log("Bussiness result is:",result.articles);
      this.bussinessdata=result.articles;
    })
  }

}
