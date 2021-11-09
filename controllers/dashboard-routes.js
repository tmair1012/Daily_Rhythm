const router = require('express').Router();
const { Task } = require('../models/Task')

// Get posts for dashboard
router.get('/', (req, res) => {
    Task.findAll({
        where: {
            
        }
    })
})
module.exports = router;