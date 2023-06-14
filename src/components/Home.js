import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
function Home() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div className="container">
      <h2>Add Note</h2>
      <form className='py-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Email address</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h2>Your Notes</h2>
      {notes.map((note) => {
        return note.title
      })}
    </div>
  )
}

export default Home