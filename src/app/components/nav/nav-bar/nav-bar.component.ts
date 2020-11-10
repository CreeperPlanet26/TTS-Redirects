import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
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
  public classes = [];

  constructor(private router: Router, private navBarService: NavBarService) {
    // Logic that handles setting svg's color when it is active.
    for (const link of this.links)
      if (router.isActive(link.path, false))
        this.classes[link.name] = ['active'];


  }
  public async ngAfterViewInit(): Promise<void> {
    this.navBarService.setDrawer(this.drawerRef);
  }

  public getClass(name: string): object {
    return this.classes[name];
  }


}
