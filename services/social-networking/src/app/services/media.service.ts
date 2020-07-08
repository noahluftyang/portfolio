import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountService } from './account.service';

const userFeedsQuery = gql`
  query UserFeeds {
    feeds {
      id
      url
      likeCount
      ownerId
      # comments {
      #   id
      # }
    }
  }
`;

const userUploadsQuery = gql`
  query UserUploads {
    uploads {
      id
    }
  }
`;

@Injectable()
export class MediaService {
  mediaList: Observable<any[]>;

  constructor(private apollo: Apollo, accountService: AccountService) {
    accountService.currentUser.subscribe(async user => {
      const accessToken = await user.getIdToken();

      localStorage.setItem('token', accessToken);
    });
  }

  feeds(): void {
    this.apollo
      .watchQuery({ query: userFeedsQuery })
      .valueChanges.pipe(map(({ data }: any) => data.feeds))
      .subscribe(
        feeds => {
          this.mediaList = feeds;
        },
        error => {
          console.error(error);
        }
      );
  }

  explore(): void {
    this.apollo
      .watchQuery({ query: userFeedsQuery })
      .valueChanges.pipe(map(({ data }) => data.feeds))
      .subscribe(
        feeds => {
          this.mediaList = feeds;
        },
        error => {
          console.error(error);
        }
      );
  }

  uploads(): void {
    this.apollo
      .watchQuery({ query: userUploadsQuery })
      .valueChanges.pipe(map(({ data }) => data.uploads))
      .subscribe(
        uploads => {
          this.mediaList = uploads;
        },
        error => {
          console.error(error);
        }
      );
  }
}
