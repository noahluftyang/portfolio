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
  private userSubscription: Subscription;
  username: string;

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

  async connectGoogle() {
    const observable = await this.accountService.connectGoogle();

    observable.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  signout(): void {
    this.accountService.signout();
  }
}
