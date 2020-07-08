import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/mod';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Social Networking';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.verify().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
