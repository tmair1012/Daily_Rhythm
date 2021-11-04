const router = require('express').Router();
const { Task } = require('../../models/Task')

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
//POST /api/users
router.post('/', (req, res) => {
  Task.create({
    id: req.body.id,
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
        task_time: '',
    }
    Task.push(newTask)
})

