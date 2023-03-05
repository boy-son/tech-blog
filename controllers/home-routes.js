const router = require('express').Router();

router.get('/', (req, res) => {
    try {
    res.render('allPosts', {layout: 'main'})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req,res) => {
    try {
        res.render('login', {layout: 'dashboard'})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    try {
        res.render('signup', {layout: 'dashboard'})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
