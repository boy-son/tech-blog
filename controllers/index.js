const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const boardRoutes = require('./boardRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/board', boardRoutes);
module.exports = router;