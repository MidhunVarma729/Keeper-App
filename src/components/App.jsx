import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import React from 'react';
import CreateArea from "./CreateArea";


function App(){
    var [notesList, updateList] = React.useState([]);

    function addNewNote(note){
        updateList((prevValue)=>{
            return [
                ...prevValue,
                note
            ]
        })
    }

    function removeNote(id){ 
         updateList((prevValue)=>{
            return prevValue.filter((e)=>
                prevValue.indexOf(e) !== id
            )
         })
    }

    return (
        <main>
            <Header />
            <CreateArea addF = {addNewNote}/> 
            {notesList.map((note, index)=>{
                return (
                    <Note 
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        delF={removeNote}
                    />
                )
            })}
            <Footer />
        </main>
    )
}

export default App;