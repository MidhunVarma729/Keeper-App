import React from 'react';
import Del from '@mui/icons-material/DeleteOutline';
import Fab from '@mui/material/Fab';


function Note(props){

    function delNote(){
        props.delF(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={delNote}><Del/></Fab>           
        </div>
    )
}

export default Note;
