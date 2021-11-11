const router = require('express').Router();
const { Task } = require("../models/");

// Get posts for dashboard
router.get('/taskView', (req, res) => {
    Task.findAll(req.body)
    .then((taskData) => res.json(taskData));

    const task = 
    res.render('taskView', {
       task
    })
    console.log(taskData);
  });

module.exports = router;