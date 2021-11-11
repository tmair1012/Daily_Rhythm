const router = require('express').Router();

// create login and password
router.get('/', (req, res) => {
    console.log("homepage-routes Test");
    res.render('homepage');
  });

router.get('/taskView', (req, res) => {
  res.render('taskView');
})


module.exports = router;