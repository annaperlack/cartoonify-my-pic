const User = require('./User');
const Image = require('./Image');

User.hasMany(Image, {
    foreignKey: 'user_id', 
  });

Image.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Image };