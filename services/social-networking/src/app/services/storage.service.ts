import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  get storage(): Storage {
    return localStorage;
  }

  get(key: string): string {
    return this.storage.getItem(key);
  }

  set(key: string, item: any): void {
    this.storage.setItem(key, item);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }
}
