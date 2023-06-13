const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a user using:POST "/api/auth/createuser" .no login reqired
router.post('/createuser',
   [
      body('name', "Enter a valid name").isLength({ min: 3 }),
      body('email', "Enter a valid email").isEmail(),
      body('password', "Enter atlease 5 charactors").isLength({ min: 5 })
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ error: errors.array() })
      }
      //check whether the user with this email alrady exists.

      try {
         let user = await User.findOne({ email: req.body.email });
         if (user) {
            return res.status(400).json({ error: 'Sorry a user with this email already exists ' });
         }
         user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
         })
         res.json(user);
      }
      catch (error) {
         console.log(error);
         res.status(500).send("Some error occured");
      }

   })

module.exports = router