const router = require('express').Router();
const { Task } = require('../../models/task')

router.get('/', (req, res) => {
    Task.findAll()
    .then(dbTask => res.json(dbTask))
    console.log(dbTask);
})

//get single task by id
/*router.get('/:id', (req, res) => {
    Task.findOne({
        where: { id: req.params.id},
    })
}
*/
//POST /api/
router.post('/', (req, res) => {
  Task.create({
    task_name: req.body.task_name,
    task_description: req.body.task_description
  })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/', (req, res) => {
    var newTask = {
        id: req.body.id,
        task_name: req.body.task_name,
        task_description: req.body.task_description,
    }
    Task.push(newTask)
})

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