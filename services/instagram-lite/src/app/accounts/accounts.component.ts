import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts.component.html',
})
export class AccountsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
