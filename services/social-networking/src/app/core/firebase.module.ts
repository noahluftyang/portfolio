import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebase)],
})
export class FirebaseModule {}
