import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountService, MediaService } from '../core/services/mod';

@Component({
  selector: 'app-profile-page',
  styleUrls: ['profile.component.scss'],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnDestroy {
  private userSubscription: Subscription;
  profileImage: string;
  username: string;

  constructor(
    private accountService: AccountService,
    private mediaService: MediaService,
    private router: Router,
    private titleService: Title,
    firebaseAuth: AngularFireAuth
  ) {
    this.userSubscription = firebaseAuth.authState.subscribe(this.bootstrap);
  }

  bootstrap = (user: firebase.User): void => {
    if (user) {
      this.profileImage = user.photoURL;
      this.username = user.displayName;

      this.titleService.setTitle(`@${this.username} • Social Networking 사진 및 동영상`);
      this.mediaService.uploads().subscribe(data => {
        console.log(data);
      });
      return;
    }

    this.router.navigateByUrl('/accounts/login');
  };

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
