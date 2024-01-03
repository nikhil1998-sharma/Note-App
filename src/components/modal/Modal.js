import { useState } from "react";
import "./Modal.css";
import { RxCross2 } from "react-icons/rx";

const Modal = (props) => {

    const {title, description} = props.data;
    
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(description);

   



  return (
    <div className="modal">
      <div className="modal-head">
        {/* <input type="text" name="title" id="title" value="Nikhil Sharma" contentEditable="true"/> */}
        <h2 contentEditable="true" onChange={(e)=>setNewTitle(e.target.value)}>{title}</h2>
        <RxCross2 onClick={props.handleCloseModal} className="modal-close-btn" />
      </div>
      <div className="modal-content">
        <p contentEditable="true" onChange={(e)=> setNewDesc(e.target.value)} >{description}</p>
      </div>
      <div className="edit-sibmit-btn">
        <input type="submit" name="submit-btn" id="submit-btn" value="Done" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Modal;
