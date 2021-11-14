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
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
})


router.post('/', (req, res) => {
    if (req.session) {
        Task.create(req.body)
        .then(dbTask => res.json(dbTask))
        .catch(err => {
            console.error(err);res.status(400).json(err);
        });
    }
})
module.exports = router;