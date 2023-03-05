const User = require('./User');
const blogPost = require('./blogPost');
const Comment = require('./Comment')

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

blogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

blogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(blogPost, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
})

Comment.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.belongsTo(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {User, blogPost, Comment}

