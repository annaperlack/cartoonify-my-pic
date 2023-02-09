
const sequelize = require('../config/connection');

const { User, Image} = require('../models');

const userData = [
  {
    id: 1,
    name: 'Anna',
    email: 'annaperlack@gmail.com',
    password: 'Hello89!Hello!'
  },
];

const imageData = [
  {
    image: 'http://res.cloudinary.com/dfk0sfgij/image/upload/v1675905014/ccinppvl5knnstommltf.jpg',
    user_id: 1,
  },
];

const seedUsers = () => User.bulkCreate(userData);
const seedImages = () => Image.bulkCreate(imageData);


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedImages();
  console.log('\n----- USERS IMAGES -----\n');
  process.exit(0);
};


seedAll();