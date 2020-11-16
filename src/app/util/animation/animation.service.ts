import { Injectable } from '@angular/core';

type NgClass = string | string[] | Set<string>;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  public showDetail = false;
  public classes: NgClass = [];
  private isShowing = false;


  public run(classesToAdd: NgClass): NgClass {
    this.isShowing = !this.isShowing;

    if (this.isShowing) {
      this.showDetail = true;
      this.classes = [];
    }

    else if (!this.isShowing) this.classes = classesToAdd;

    return this.classes;
  }
}
