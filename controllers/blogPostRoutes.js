const router = require('express').Router();
const { blogPost, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPosts = await blogPost.findAll({
        include: {
            model: User,
            attributes: ['username']
        }
    });
    res.render('blogPosts', { blogPosts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
});

router.post('/', async (req, res) => {
    try {
        const blogPostData = await blogPost.create(req.body);
        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    blogPost.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(blogPostData => {
        if (!blogPostData) {
            res.status(404).json({message: 'No blog post found with this id'});
            return;
        }
        res.json(blogPostData);
    })
});

router.delete('/:id', async (req, res) => {
    try {
        const blogPostData = await blogPost.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!blogPostData) {
            res.status(404).json({message: 'No blog post found with this id'});
            return;
        }
        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
