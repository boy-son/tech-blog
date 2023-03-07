const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dBoardRoutes = require('./dashBoardRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dBoardRoutes);
module.exports = router;