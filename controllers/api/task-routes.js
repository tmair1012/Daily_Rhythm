const router = require("express").Router();
const { Task } = require("../../models/");

router.get('/', (req, res) => {
  Task.findAll().then((taskData) => res.json(taskData));
  console.log(taskData);
  const task = taskData
  res.render('taskView', { task })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

//get single task by id
router.get('/:id', (req, res) => {
  Task.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((taskData) => {
      if (!taskData) {
        res
          .status(404)
          .json({ message: "The task you are trying to find does not exist" });
        return;
      }
      res.json(taskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /api/
router.post("/add", (req, res) => {
  Task.create(req.body)
    .then((taskData) => res.json(taskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) =>{
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(taskData => {
    if (!taskData) {
      res.status(404).json({ message: 'This task you are trying to delete does not exist' });
      return;
    }
    res.json(taskData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

module.exports = router;