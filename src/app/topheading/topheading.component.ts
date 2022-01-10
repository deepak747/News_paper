import { Component, OnInit } from '@angular/core';
import {NewsbplService} from '../Service/newsbpl.service'
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
     allnewsdata:any=[];
  constructor(private newsBplservice:NewsbplService) { }

  ngOnInit(): void {
      this.newsBplservice.viewData().subscribe(data=>{
        console.log("News api data is:",data.articles);
         this.allnewsdata=data.articles;
      })
  }

}
