import React, { useContext, useState, useRef } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';

function Notes() {
    console.log("Notes Props")
    const context = useContext(NoteContext);
    const { notes, editNote } = context;
    const [note, setNote] = useState({ id: '', title: '', description: '', tag: '' })
    const refClose = useRef(null)


    const handleSubmit = (e) => {
        editNote(note.id, note.title, note.description, note.tag);
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateNote = (currentNote) => {
        //console.log(currentNote)
        setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag })

    }
    return (
        <>
            <Addnote />
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length < 5 || note.description.length < 5} type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2>Your Notes</h2>
                {notes.length === 0 && "No Notes Available"}
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}</div>
        </>
    )
}

export default Notes