const { DataSource } = require('apollo-datasource');

class UserService extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }
}

exports.UserService = UserService;
