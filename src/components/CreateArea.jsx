import React from "react";
// import Add from '@mui/icons-material/Add'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  var [expandedInput, changeExpandState] = React.useState(false);

  var [note, ChangeNote] = React.useState({
    title:"",
    content:""
  })

  function trackChanges(event){
    var newText = event.target.value;
    var context = event.target.name;
    ChangeNote((prevValue)=>{
      return {
        ...prevValue,
        [context]:newText
      }
    })
  }

  function addNewNote(event){
    props.addF(note)
    ChangeNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }


  function expandForm(){
    changeExpandState(true);
  }
 

  return (
    <div>
      <form className="create-note">
        {expandedInput &&  <input name="title" placeholder="Title" onChange={trackChanges} value={note.title}/>}
        <textarea name="content" placeholder="Take a note..." rows={expandedInput? 3: 1} onChange={trackChanges} value={note.content} onClick={expandForm} />
        <Zoom in={expandedInput}> 
          <Fab onClick={addNewNote}> 
            <AddIcon /> 
          </Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
