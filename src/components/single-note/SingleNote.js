import "./SingleNote.css";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../modal/Modal";
import { useState } from "react";

const SingleNote = (props) => {
  const { title, description } = props.item;
  const [modalState, setModalState] = useState(false)  

    function handleOpenModal(){
        setModalState(true)
    }

    function handleCloseModal(){
        setModalState(false)
    }

  return (
    <>
    <div className="single-note">
      <div className="title-edit">
        <h2>{title}</h2>
        <BiSolidEdit style={{ cursor: "pointer" }} className="edit-btn" onClick={handleOpenModal} />
      </div>
      <p>{description}</p>
      <div className="delete">
        <MdDeleteForever style={{ cursor: "pointer" }} className="delete-btn" />
      </div>
    </div>
    { modalState && <div className="note-edit-modal">
        <Modal handleCloseModal={handleCloseModal} data={props.item} />
    </div>}
    </>
  );
};

export default SingleNote;
