const User = require('./User');
const comments = require('./comments');

User.hasMany(comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, comments };
