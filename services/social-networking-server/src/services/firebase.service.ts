import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  get storage() {
    return admin.storage();
  }

  uploadMedia(media64Str) {
    const file = this.storage.bucket().file('test.png');
    const imageBuffer = Buffer.from(media64Str, 'base64');
    const imageByteArray = new Uint8Array(imageBuffer);

    return file.save(imageByteArray);
  }
}
