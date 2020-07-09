import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { AccountService, MediaService } from '../services/mod';

@Component({
  selector: 'app-profile-page',
  styleUrls: ['profile.component.scss'],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileImage: string;
  username: string;

  constructor(
    private accountService: AccountService,
    private titleService: Title,
    public mediaService: MediaService
  ) {}

  bootstrap = (user: firebase.User): void => {
    if (user) {
      this.profileImage = user.photoURL;
      this.username = user.displayName;

      this.titleService.setTitle(`@${this.username} • Social Networking 사진 및 동영상`);
    }
  };

  ngOnInit(): void {
    this.mediaService.uploads();
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
  }

  signout(): void {
    this.accountService.signout();
  }
}
