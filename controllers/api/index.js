const router = require('express').Router();



const taskRoutes = require('./task-routes');
const userRoutes = require('./user-routes');

router.use('/task', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;
