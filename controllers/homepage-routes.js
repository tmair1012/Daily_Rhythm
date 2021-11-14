const router = require('express').Router();

// create login and password
router.get('/', (req, res) => {
    console.log("homepage-routes Test");
    res.render('homepage');
  });


module.exports = router;