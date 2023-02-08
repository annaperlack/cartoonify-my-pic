const { User } = require('../models');

const userData = [
  {
    name: 'Anna',
    email: 'annaperlack@gmail.com',
    password: 'Hello89!Hello!'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;