const { DataSource } = require('apollo-datasource');

class ChatService extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }
}

exports.ChatService = ChatService;
