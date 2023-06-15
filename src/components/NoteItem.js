import React, { useContext,useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';


function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote,getNotes } = context;
    const { note } = props;

    const editNote = (note) => {
      //  <Updatenote note={note} />
    }

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={() => editNote(note)}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={() => deleteNote(note._id)}></i>
                </div>
            </div>
        </div>
    )

}

export default NoteItem