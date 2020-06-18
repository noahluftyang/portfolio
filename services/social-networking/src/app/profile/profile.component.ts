import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from '../core/services/mod';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(private accountService: AccountService, private router: ActivatedRoute) {}

  async connectGoogleAccount() {
    const test = await this.accountService.connectGoogleAccount();

    console.log(test.user.uid);
  }
}
