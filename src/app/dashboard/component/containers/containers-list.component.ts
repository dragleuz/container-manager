import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../service/http-service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-containers-list',
  templateUrl: 'containers-list.component.html',
  styleUrls: ['containers-list-component.scss']
})

export class ContainersListComponent implements OnInit {
  subs: Subscription = new Subscription();
  cols = [
    {field: '#', header: '#'},
    {field: 'Image', header: 'Image'},
    {field: 'Created', header: 'Timestamp'},
  ];
  selected = {};

  containers = [
    {Id: '68f4b0b28230', Image: 'bigbro1221/fm:latest', up: false, pullCmd: ''},
    {Id: 'cf02942417bb', Image: 'bigbro1221/dl:latest', up: false},
    {Id: '2001d0c21001', Image: 'bigbro1221/dl-api:latest', up: false},
    {Id: 'a19e1b54ed5d', Image: 'bigbro1221/nano:latest', up: false},
    {Id: 'df088f1c7817', Image: 'bigbro1221/cs-api:latest', up: false},
  ];

  constructor(
    private http: HttpService
  ) {
  }

  async ngOnInit() {
    await this.getContainers();
    this.selected = this.containers[0];
  }

  getContainers() {
    return new Promise<void>(resolve => {
      this.http.post({path: 'containers/json'}, 'docker').subscribe(data => {
        this.containers.map((c: any) => {
          let fetchedContainer: any = data.find((container: any) => container.Image == c.Image)
          if (!!fetchedContainer) {
            c.up = true;
            c.Created = fetchedContainer.Created;
            c.Id = fetchedContainer.Id;
          } else {
            c.up = false;
            c.Created = undefined;
          }
        });
        resolve();
      })
    })
  }

  toggleContainer(image: any, action: string) {
    this.http.post({path: `containers/${image.Id}/${action}`, method: 'POST'}, 'docker').subscribe(async data => {
      await this.getContainers();
    })
  }
}
