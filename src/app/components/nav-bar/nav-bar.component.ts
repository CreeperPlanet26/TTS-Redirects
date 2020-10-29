import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('drawer', { static: false })
  public drawerf: MatDrawer;


  constructor() { }

  public async ngAfterViewInit(): Promise<void> {
    console.log(this);
    setTimeout(async () => {
      await this.drawerf.open();
    }, 100);

  }

  public async open() {
    console.log("openign..")
    const r = await this.drawerf.toggle();
    console.log(r);
  }

}
