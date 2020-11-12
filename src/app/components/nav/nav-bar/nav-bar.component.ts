import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { navLinks } from '../nav-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('drawer')
  private drawerRef: MatDrawer;

  constructor(public navBarService: NavService) {
    // navBarService.setClass();
  }

  public async ngAfterViewInit(): Promise<void> {
    this.navBarService.setDrawer(this.drawerRef);
  }

}
