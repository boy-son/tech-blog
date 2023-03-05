const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Test Comment 1',
        user_id: 1,
        blogpost_id: 1
    },
    {
        comment_text: 'Test Comment 2',
        user_id: 2,
        blogpost_id: 2
    },
    {
        comment_text: 'Test Comment 3',
        user_id: 3,
        blogpost_id: 3
    },
    {
        comment_text: 'Test Comment 4',
        user_id: 4,
        blogpost_id: 4
    },
    {
        comment_text: 'Test Comment 5',
        user_id: 5,
        blogpost_id: 5
    }
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;