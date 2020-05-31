import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularLab3';
  dataRet;
  constructor(private dataServ:DataService){ 
  }
  
  ngOnInit(){
      this.dataRet = this.dataServ.retrieveData();
  }

}