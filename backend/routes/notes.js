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

//Route 2: add notes using POST '/api/notes/addnotes' Login required

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


//Route 3: update notes using PUT '/api/notes/updatenotes' Login required

router.put('/updatenotes/:id', fetchuser, 
   async (req, res) => {
      console.log("note")
      try {
         const { title, description, tag } = req.body;
        
         //create newNote object
         const newNote = {};
         if (title) { newNote.title = title }
         if (description) { newNote.description = description }
         if (tag) { newNote.tag = tag }
        

         //find the note and update it
         let note = await Note.findById(req.params.id);
         if (!note) { return res.status(404).send("Not Found") }

         if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Found")
         }

         note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

         res.json({ note })
      }
      catch (error) {
         res.status(500).send("Internal server error");
      }

   })

module.exports = router