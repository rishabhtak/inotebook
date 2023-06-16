import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{`Title: ${note.title}`}</h5>
                    <p className="card-text">{`Description: ${note.description}`}</p>
                    <p className="card-text">{`Tag: ${note.tag.length === 0 ? "No Tag" : note.tag}`}</p>
                    <i className="fa-regular fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => updateNote(note)}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={() => deleteNote(note._id)}></i>
                </div>
            </div>
        </div>
    )

}

export default NoteItem