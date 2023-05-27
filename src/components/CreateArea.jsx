import React from "react";

function CreateArea(props) {

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
 

  return (
    <div>
      <form onSubmit={addNewNote}>
        <input name="title" placeholder="Title" onChange={trackChanges} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={trackChanges} value={note.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
