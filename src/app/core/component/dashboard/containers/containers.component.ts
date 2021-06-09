import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http-service";


@Component({
  templateUrl: 'containers.component.html',
  styleUrls: ['containers-component.scss']
})

export class ContainersComponent implements OnInit {
  cols = [
    {field: '#', header: '#'},
    {field: 'Image', header: 'Image'},
    {field: 'Created', header: 'Timestamp'},
  ];
  selected = {};

  containers = [];

  constructor(
    private http: HttpService
  ) {
  }

  ngOnInit() {
    console.log('calling');
    this.http.post({path: 'containers/json'}, 'containers').subscribe(data => {
      this.selected = data[0];
      this.containers = data;
    })
  }
}
