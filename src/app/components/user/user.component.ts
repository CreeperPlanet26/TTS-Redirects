import { Component } from '@angular/core';
import { UserAnimation } from './user.animation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.detail.scss'],
  animations: UserAnimation,
})
export class UserComponent {

  public roles: { name: string; color: number | string; }[] = [
    { name: 'Admin', color: 14286926 },
    { name: 'OG', color: 16744987 }, // 16744987
    { name: 'EPIC MEMER', color: 2588365 },
    { name: 'Invited Someone', color: 1659008 },
    { name: 'Xbox', color: 2474073 },
    { name: '60 FPS', color: 13700 },
    { name: 'MYTHIC', color: 16770560 },
  ];

  public isShowing = false;
  public get state(): string { return this.isShowing ? 'show' : 'remove'; }
  public get class(): string { return this.roles.length <= 3 ? 'three' : ''; }

  constructor() {
    this.convertColors();
  }

  public toggle(): void {
    this.isShowing = !this.isShowing;
  }

  private convertColors(): void {
    for (const r of this.roles)
      r.color = this.getHexString(<number>r.color);
  }

  /**
   * Takes an RBG Integer 16744987 and returns an RBG String rgb(255, 130, 27);
   * @param rbgInt - The RBG Integer
   */
  private getRgbString(rbgInt: number): string {
    const red = (rbgInt >> 16) & 255;
    const green = (rbgInt >> 8) & 255;
    const blue = rbgInt & 255;

    return `rgb(${red}, ${green}, ${blue})`;
  }

  /**
   * Takes a RBG Integer 16744987 and returns a Hex Code #ff821b;
   * @param rbgInt - The RBG Integer
   */
  private getHexString(rbgInt: number): string {
    return `#${rbgInt.toString(16).padStart(6, '0')}`;
  }
}
