const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.user.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.user.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.user.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.user.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    await user.destroy();

    return { id };
  }
}

module.exports = UserService;
