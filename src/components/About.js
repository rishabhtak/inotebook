import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';


function About() {
  const a = useContext(NoteContext);
  return (
    <div>This is about {a.state.class}</div>
  )
}

export default About