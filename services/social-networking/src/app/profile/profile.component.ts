import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountService } from '../core/services/mod';

@Component({
  selector: 'app-profile-page',
  styleUrls: ['profile.component.scss'],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnDestroy {
  username: string;
  private userSubscription: Subscription;

  constructor(
    private accountService: AccountService,
    firebaseAuth: AngularFireAuth,
    router: Router
  ) {
    this.userSubscription = firebaseAuth.authState.subscribe(user => {
      if (user) {
        console.log(user.displayName);

        this.username = user.displayName;
        return;
      }

      router.navigateByUrl('/accounts/login');
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  async connectGoogleAccount() {
    const test = await this.accountService.connectGoogleAccount();

    console.log(test.user.uid);
  }

  signout(): void {
    this.accountService.signout();
  }
}
