const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dBoardRoutes = require('./dashBoardRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dboard', dBoardRoutes);
module.exports = router;