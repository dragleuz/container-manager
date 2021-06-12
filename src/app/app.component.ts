import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ScreenResService} from "@app/core/service/screen-res.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(
    private screenResService: ScreenResService,
  ) {
  }

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize = (event: any) => {
    this.screenResService.setLowRes(+event);
  };


}
