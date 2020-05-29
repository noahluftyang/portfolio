import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {}
}
