const express = require('express');

const router = express.Router();

// @route      POST api/users
// @desc       Register a user
// @access     Public
router.post('/', (req, res) => {
  console.log(req.body);
  //   res.send('Users route');
});

module.exports = router;
