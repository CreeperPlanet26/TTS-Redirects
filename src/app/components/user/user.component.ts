import { Component } from '@angular/core';
import { AnimationService } from 'src/app/util/animation/animation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.animation.scss', './user.detail.scss']
})
export class UserComponent {

  constructor(private animation: AnimationService) { }

  public get classes() { return this.animation.classes; }
  public get showDetail() { return this.animation.showDetail; }

  public toggle(): void {
    this.animation.run('remove');
  }
}
