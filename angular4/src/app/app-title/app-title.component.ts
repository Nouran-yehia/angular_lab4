import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {

  title: string = '';
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.actRoute.snapshot.params.title;
  }

}
