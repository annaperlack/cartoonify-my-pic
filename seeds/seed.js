
const sequelize = require('../config/connection');

const { User } = require('../models');

const userData = [
  {
    name: 'Anna',
    email: 'annaperlack@gmail.com',
    password: 'Hello89!Hello!'
  },
];

const seedUsers = () => User.bulkCreate(userData);


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  process.exit(0);
};

seedAll();