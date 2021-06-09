import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http-service";

@Component({
  templateUrl: 'images.component.html'
})

export class ImagesComponent implements OnInit {
  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ];

  constructor(
    private http: HttpService
  ) {
  }

  ngOnInit() {
    this.http.get('images/json').subscribe(data=> {
      console.log(data);
    })
  }
}
