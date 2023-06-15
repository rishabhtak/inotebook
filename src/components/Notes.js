import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';

function Notes() {
    useEffect(() => {
        getNotes();
    }, [])

    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    return (
        <>
            <Addnote />
            <div className='row'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}</div>
        </>
    )
}

export default Notes