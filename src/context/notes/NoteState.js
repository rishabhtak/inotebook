import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NoteContext from "./NoteContext";


const NoteState = () => {

    const s1 = {
        name: 'Ris',
        class: '10b'
    }

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                name: "tony",
                class: '10A'
            })
        }, 1000)
    }


    return (
        <NoteContext.Provider value={{ state, update }}>
            <Outlet />
        </NoteContext.Provider>
    )
}

export default NoteState;