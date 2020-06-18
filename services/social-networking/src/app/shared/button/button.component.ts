import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  type = 'button';
}
