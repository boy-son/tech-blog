const router = require('express').Router();


const homeRoutes = require('./home-routes');
const dBoardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dBoardRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/blogPost', blogPostRoutes);

module.exports = router;