import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
function Home() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])

  return (

    <div>This is home {a.state.name}</div>
  )
}

export default Home