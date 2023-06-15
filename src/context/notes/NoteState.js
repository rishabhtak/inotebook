import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NoteContext from "./NoteContext";


const NoteState = () => {

    const notesInitial = [
        {
            "_id": "6489bf4c2e0caad3d579160057",
            "user": "648882361d59b874e92831d1",
            "title": "my note",
            "description": "this is a demo",
            "tag": "personal",
            "date": "2023-06-14T13:23:24.361Z",
            "__v": 0
        },
        {
            "_id": "6489fbf96bafsd2ec696c2d9c1e",
            "user": "648882361d59b874e92831d1",
            "title": "my note2",
            "description": "this is a demo2",
            "tag": "personal",
            "date": "2023-06-14T17:42:17.830Z",
            "__v": 0
        },
        {
            "_id": "6489bf4c2e0csd3d579160057",
            "user": "648882361d59b874e92831d1",
            "title": "my note",
            "description": "this is a demo",
            "tag": "personal",
            "date": "2023-06-14T13:23:24.361Z",
            "__v": 0
        },
        {
            "_id": "6489fbf96ba2ec696fc2d9c1e",
            "user": "648882361d59b874e92831d1",
            "title": "my note2",
            "description": "this is a demo2",
            "tag": "personal",
            "date": "2023-06-14T17:42:17.830Z",
            "__v": 0
        },
        {
            "_id": "6489fbf96ba2ec696c2d9hc1e",
            "user": "648882361d59b874e92831d1",
            "title": "my note2",
            "description": "this is a demo2",
            "tag": "personal",
            "date": "2023-06-14T17:42:17.830Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    const addNote = (title, description, tag) => {
        const note = {
            "_id": "6489fbdddf96ba2ec696c2d9hc1e",
            "user": "648882361d59b874e92831d1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-06-14T17:42:17.830Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote }}>
            <Outlet />
        </NoteContext.Provider>
    )
}

export default NoteState;