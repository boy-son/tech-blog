const {blogPost} = require('../models');


const blogPostData = [
    {
        title: 'Test Title 1',
        content: 'Test Content 1',
        user_id: 1
    },
    {
        title: 'Test Title 2',
        content: 'Test Content 2',
        user_id: 2
    },
    {
        title: 'Test Title 3',
        content: 'Test Content 3',
        user_id: 3
    },
    {
        title: 'Test Title 4',
        content: 'Test Content 4',
        user_id: 4
    },
    {
        title: 'Test Title 5',
        content: 'Test Content 5',
        user_id: 5
    }
]

const seedBlogPost = () => blogPost.bulkCreate(blogPostData);
module.exports = seedBlogPost;