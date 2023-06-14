const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');



//Route 1: get all notes using GET '/api/notes/fetchallnotes' Login required

router.get('/fetchallnotes', fetchuser,
   async (req, res) => {
      try {
         const notes = await Note.find({ user: req.user.id })
         res.json({ notes })
      }
      catch (error) {
         res.status(500).send("Internal server error");
      }

   })

//Route 1: add notes using POST '/api/notes/addnotes' Login required

router.post('/addnotes', fetchuser, [
   body('title', "Enter a valid title").isLength({ min: 3 }),
   body('description', "description must be atleast 5 charcters").isLength({ min: 5 })
],
   async (req, res) => {
      try {
         const { title, description, tag } = req.body;
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
         }
         const notes = new Note({ title, description, tag, user: req.user.id })
         const saveNote = await notes.save();
         res.json({ saveNote })
      }
      catch (error) {
         res.status(500).send("Internal server error");
      }

   })

module.exports = router