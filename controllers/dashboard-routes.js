const router = require('express').Router();
const { Task } = require("../models");

// Get posts for dashboard
router.get('/', (req, res) => {
    Task.findAll().then((taskData) => res.json(taskData));
    const task = taskData;
    res.render('taskView', {
        task
    })
    console.log(taskData);
  });

module.exports = router;