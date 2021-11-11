const router = require('express').Router();
const { Task, User } = require("../models/");

// Get posts for dashboard
router.get('/', (req, res) => {
    Task.findAll()
    .then((taskData) => {
      console.log('=====================');
      console.log(taskData);
      //const tasks = taskData.map(task => task.get({ plain: true}));
      
      res.render('taskView', { task: taskData})
  });
})
module.exports = router;