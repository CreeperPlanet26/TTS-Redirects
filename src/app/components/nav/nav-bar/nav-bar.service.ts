import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable()
export class NavBarService {
    public drawer: MatDrawer;


    public setDrawer(drawer: MatDrawer): MatDrawer {
        return this.drawer = drawer;
    }
}
