const router = require('express').Router();

const taskRoutes = require('./task-routes')


router.use('/', taskRoutes);


module.exports = router;