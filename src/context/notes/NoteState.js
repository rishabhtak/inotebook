import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NoteContext from "./NoteContext";

const host = "http://localhost:5000";

const NoteState = () => {

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);


    // fetch all notes

    const getNotes = async () => {
        // api to add note
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg4MjM2MWQ1OWI4NzRlOTI4MzFkMSIsImlhdCI6MTY4Njc0MTY5MX0.JjYK1yJTc1f0HxhEwXGiPt8v53WDZScaAzC27qC8ByE"
            },
        });
        const json = await response.json();
        console.log("json", json.notes)
        setNotes(json.notes);

    }
    const addNote = async (title, description, tag) => {
        // api to add note
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg4MjM2MWQ1OWI4NzRlOTI4MzFkMSIsImlhdCI6MTY4Njc0MTY5MX0.JjYK1yJTc1f0HxhEwXGiPt8v53WDZScaAzC27qC8ByE"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

    }

    const deleteNote = (id) => {
        const newNote = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNote);

    }

    const editNote = async (id, title, description, tag) => {
        //update notes using api
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg4MjM2MWQ1OWI4NzRlOTI4MzFkMSIsImlhdCI6MTY4Njc0MTY5MX0.JjYK1yJTc1f0HxhEwXGiPt8v53WDZScaAzC27qC8ByE"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        //logic to edit in client
   /*     for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title,
                    element.description = description,
                    element.tag = tag
            }

        }*/
    }


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, getNotes }}>
            <Outlet />
        </NoteContext.Provider>
    )
}

export default NoteState;