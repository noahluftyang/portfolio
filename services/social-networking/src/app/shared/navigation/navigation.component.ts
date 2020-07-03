import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  styleUrls: ['navigation.component.scss'],
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  onFileChange(files): void {
    if (!files.length) {
      return;
    }

    console.log(files[0]);

    if (files[0].type.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.router.navigateByUrl('/create', { state: { mediaUrl: reader.result } });
    };
  }
}
