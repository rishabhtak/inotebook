const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a user using:POST "/api/auth/" .doesn't reqire auth
router.post('/',
   [
      body('name', "Enter a valid name").isLength({ min: 3 }),
      body('email', "Enter a valid email").isEmail(),
      body('password', "Enter atlease 5 charactors").isLength({ min: 5 })
   ],
   (req, res) => {
      //console.log(req.body);
      // const user = User(req.body);
      // user.save();
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ error: errors.array() })
      }
      User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
      }).then(user => (res.json(user))).catch(err => res.json({
         error: "Please enter a valid email value",
         message: err.message
      })
      )
   })

module.exports = router