const router = require('express').Router();
const { Task } = require('../models/Task')

// Get posts for dashboard
router.get('/', (req, res) => {
Task.findAll()
.then(dbTask => res.json(dbTask))
.catch(err => {
    console.error(err);
    res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Task.create({
            task_text: req.body.task_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        .then(dbTask => res.json(dbTask))
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/', (req, res) => {
    if (req.session) {
        Task.destroy({
            where: { 
                id: req.params.id
            }
        })
        .then(dbTask => {
            if (!dbTask) {
                res.status(404).json({ message: "No task"});
                return;
            }
            res.json(dbTask);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    }
});







module.exports = router;