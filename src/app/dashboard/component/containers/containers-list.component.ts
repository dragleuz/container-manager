import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../../core/service/http-service";
import {Observable, Subscription} from "rxjs";
import {ContainerService} from "../../service/container.service";
import {take} from "rxjs/operators";
import {Container} from "../../model/container.model";


@Component({
  selector: 'app-containers-list',
  templateUrl: 'containers-list.component.html',
  styleUrls: ['containers-list-component.scss']
})

export class ContainersListComponent implements OnInit, OnDestroy {

  @ViewChild('sc') scrollPanel: any;
  subs: Subscription = new Subscription();
  cols = [
    {field: '#', header: '#'},
    {field: 'Image', header: 'Image'},
    {field: 'Created', header: 'Timestamp'},
  ];
  selected = {};
  containers$: Observable<any> = new Observable();
  console = {
    collapsed: false,
    content: ''
  }

  currentContainer: any;

  constructor(
    private http: HttpService,
    public service: ContainerService,
  ) {
  }

  ngOnInit() {
    this.getContainers();
  }

  getContainers() {
    this.containers$ = this.service.containers$
  }

  toggleContainerImplement(container: any, action: string) {
    return new Promise<void>(resolve => {
      this.subs.add(this.http.post({
        path: `containers/${container.Id}/${action}`,
        method: 'POST'
      }, 'docker')
        .pipe(take(1))
        .subscribe(async data => {
          resolve();
        }))
    })
  }

  async toggleContainer(container: Container, action: string) {
    await this.toggleContainerImplement(container, action);
    return this.service.save({
      ...container,
      up: action == 'start',
      Changed: new Date(),
      RunCommand: {
        "Image": "bigbro1221/cs-api:latest",
        "ExposedPorts": {
          "8080/tcp": {}
        },
        "PortBindings": {
          "8080/tcp": [
            {
              "HostPort": "3232"
            }
          ]
        },
        "RestartPolicy": {
          "Name": "always"
        }
      }
    }, container.id);
  }

  async updateContainer(c: Container) {
    await this.pullImage(c);
    await this.buildNewImage(c);
  }

  pullImage(c: Container) {
    this.log('pulling image');
    return new Promise<void>(resolve => {
      this.subs.add(this.http.post({
        path: `images/create?fromImage=${c.Image}`,
        method: 'POST',
      }, 'docker', {responseType: 'text'})
        .pipe(take(1))
        .subscribe((data: string) => {
          this.log(data);
          resolve();
        }))
    })
  }

  buildNewImage(c: Container) {
    this.log('Building new image');
    return new Promise<void>(resolve => {
      this.subs.add(this.http.post({
        image: c.Image,
        body: {
          "Image": "bigbro1221/cs-api:latest",
          "ExposedPorts": {
            "8080/tcp": {}
          },
          "PortBindings": {
            "8080/tcp": [
              {
                "HostPort": "3232"
              }
            ]
          },
          "RestartPolicy": {
            "Name": "always"
          },
        }
      }, 'docker/build', {responseType: 'text'})
        .pipe(take(1))
        .subscribe(async data => {
          let id;
          this.log(data)
          if (JSON.parse(data)['Id']) {
            id = JSON.parse(data)['Id'].substring(0, 12);
          }
          await this.toggleContainer(c, 'stop')
          await this.service.save({...c, Id: id}, c.id)
          await this.toggleContainer({...c, Id: id}, 'start')
          resolve();
        }))
    })
  }

  log(str: any) {
    this.console.collapsed = false;
    this.console.content = this.console.content + '\n' + str;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
