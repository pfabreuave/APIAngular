import { Component } from '@angular/core';
import { ApiJsonService } from './api-json.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apijs';
  data:Array<any>;

constructor(private Api: ApiJsonService) {
  this.data = new Array<any>(); }
  GetDataFromApi() { 
  this.Api.getData().subscribe((data)=>{
    this.data=data })}

  }