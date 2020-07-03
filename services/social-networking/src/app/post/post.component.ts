import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MediaService } from '../services/mod';

@Component({
  selector: 'app-post-page',
  styleUrls: ['./post.component.scss'],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  mediaForm: FormGroup;
  mediaUrl: string;

  constructor(
    private location: Location,
    private mediaService: MediaService,
    formBuilder: FormBuilder
  ) {
    this.mediaForm = formBuilder.group({
      description: '',
    });
  }

  ngOnInit(): void {
    const { mediaUrl } = this.location.getState();

    this.mediaUrl = mediaUrl;
  }

  back(): void {
    this.location.back();
  }

  postMedia() {
    console.log(this.mediaUrl);
  }
}
