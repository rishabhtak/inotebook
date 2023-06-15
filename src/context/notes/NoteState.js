import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NoteContext from "./NoteContext";


const NoteState = () => {
    const host = "http://localhost:5000";

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    useEffect(() => {
        getNotes()

    }, [])


    // fetch all notes
    const getNotes = async () => {
        // api to add note
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODgyMzYxZDU5Yjg3NGU5MjgzMWQxIn0sImlhdCI6MTY4Njg1NTI4OX0.nIwmfe1JP_KZp5v-STrRaW38BlcYZd_f75T0RazdzHA"
            },
        });
        const note = await response.json();
        setNotes(note);

    }
    const addNote = async (title, description, tag) => {
        // api to add note
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODgyMzYxZDU5Yjg3NGU5MjgzMWQxIn0sImlhdCI6MTY4Njg1NTI4OX0.nIwmfe1JP_KZp5v-STrRaW38BlcYZd_f75T0RazdzHA"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        console.log(note)
        setNotes(notes.concat(note))
    }

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODgyMzYxZDU5Yjg3NGU5MjgzMWQxIn0sImlhdCI6MTY4Njg1NTI4OX0.nIwmfe1JP_KZp5v-STrRaW38BlcYZd_f75T0RazdzHA"
            },
        });
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    const editNote = async (id, title, description, tag) => {
        //update notes using api
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODgyMzYxZDU5Yjg3NGU5MjgzMWQxIn0sImlhdCI6MTY4Njg1NTI4OX0.nIwmfe1JP_KZp5v-STrRaW38BlcYZd_f75T0RazdzHA"
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