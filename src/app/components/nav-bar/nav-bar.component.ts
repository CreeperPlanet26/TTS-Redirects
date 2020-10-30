import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavBarService } from './nav-bar.service';
import { navLinks } from './nav-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('drawer')
  private drawerRef: MatDrawer;
  public links = navLinks;

  constructor(private navBarService: NavBarService) { }

  public async ngAfterViewInit(): Promise<void> {
    this.navBarService.setDrawer(this.drawerRef);
  }


}
