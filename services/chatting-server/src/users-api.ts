import { RESTDataSource } from 'apollo-datasource-rest';

import { environments } from './environments';

export class UsersAPI extends RESTDataSource {
  baseURL: environments.AUTH_API_URL;

  async getUser() {
    return this.get('/user');
  }
}
