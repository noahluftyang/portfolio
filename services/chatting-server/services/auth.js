const { DataSource } = require('apollo-datasource');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

function generateToken(payload) {
  const accessToken = sign(payload);
  const refreshToken = sign(payload, { expiresIn: '60s' });

  return { accessToken, refreshToken };
}

class AuthService extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async login(payload) {
    const { email, password } = payload;

    let _user;

    try {
      _user = await this.store.user.findOne({ where: { email } });
    } catch (error) {
      console.error(error);
      throw new Error();
    }

    if (!_user) {
      console.error('user does not exist');
      throw new Error();
    }

    if (!compare(password, _user.password)) {
      throw new Error();
    }

    return generateToken({
      id: _user.id,
      email: _user.email,
      username: _user.username,
    });
  }
}

exports.AuthService = AuthService;
