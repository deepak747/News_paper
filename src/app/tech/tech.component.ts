import { Component, OnInit } from '@angular/core';
import { NewsbplService } from '../Service/newsbpl.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
     technologydata:any=[];
  constructor(private newsbplservice:NewsbplService) { }

  ngOnInit(): void {
       this.newsbplservice.technology().subscribe(data=>{
       console.log("Technology data is:",data.articles);
       this.technologydata=data.articles;
     })
  }
}
