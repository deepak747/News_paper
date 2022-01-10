import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsbplService {

  constructor(private httpClient:HttpClient) { }
     newsapi="https://newsapi.org/v2/top-headlines?country=in&apiKey=954b656e13ac4cbf820ee134a9207b6b";
     technologyapi="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=954b656e13ac4cbf820ee134a9207b6b";
     bussinessapi="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=954b656e13ac4cbf820ee134a9207b6b"; 
        viewData():Observable<any>{
           return this.httpClient.get(this.newsapi)
        }

         technology():Observable<any>{
           return this.httpClient.get(this.technologyapi);
         }

         bussiness():Observable<any>{
           return this.httpClient.get(this.bussinessapi);
         }

}
