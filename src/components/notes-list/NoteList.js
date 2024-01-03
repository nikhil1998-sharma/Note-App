import "./NoteList.css";
import { GiNotebook } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";




const NoteList = (props) => {
  
  const allNotes = props.noteData;




  

  return (
    <div className="container">
      <div className="note-list">
        <div className="my-notes">
          <GiNotebook style={{ fontSize: "2rem" }} />
          <h2>My Notes</h2>
        </div>
        <div className="my-notes-list">
          <ul>
            {allNotes.map((item) => (
              <div className="list-item">
              <li>{item.title}</li>
              
            </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-blur" onClick={props.close}>
        <ImCross
          style={{
            cursor: "pointer",
            paddingLeft: "10px",
            paddingTop: "10px",
            fontSize: "2rem",
          }}
        />
      </div>
      
    </div>
  );
};

export default NoteList;
