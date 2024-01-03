import "./Home.css";
import { TiThMenu } from "react-icons/ti";
import { MdNoteAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import NoteList from "../notes-list/NoteList";
import SingleNote from "../single-note/SingleNote";
import { createNote } from "../../redux/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const allNotes = useSelector(state => state.noteReducer.myNotes);

  function handleOpenSideBar() {
    setShowSideBar(true);
  }

  function handleCloseSideBar() {
    setShowSideBar(false);
  }

  function handleOpenCreateNoteModal() {
    setAddNoteModal(true);
  }

  function handleCloseCreateNoteModal() {
    setAddNoteModal(false);
  }


  const disptch = useDispatch();

  function handleAddNote(e) {
    e.preventDefault();
    if (!title?.trim() || !description?.trim()) {
      alert("Required title & description");
    }

    const _id = nanoid(4);

    const newNote = {_id ,title, description}
    disptch(createNote(newNote))
    
  }

  return (
    < div className="Home">
      <nav className="nav">
        <div className="menu" onClick={handleOpenSideBar}>
          <TiThMenu style={{ fontSize: "2rem" }} />
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </nav>
      <div className="notes-container">
        { allNotes?.map(item => <SingleNote item={item} />)  }
      </div>
      <button className="add-note" onClick={handleOpenCreateNoteModal}>
        <MdNoteAdd style={{ color: "rgb(243, 176, 75)"  }} />
      </button>
      {showSideBar && (
        <div className="side-bar">
          <NoteList close={handleCloseSideBar} noteData={allNotes}/>
        </div>
      )}

      {addNoteModal && (
        <div className="add-new-note">
          <form className="add-note-form">
            <div className="add-note-heading">
              <h2>Add Note</h2>
              <RxCross2
                className="cross"
                onClick={handleCloseCreateNoteModal}
              />
            </div>
            <div className="input-area">
              <div className="input-title">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  name="content"
                  cols="60"
                  rows="10"
                  placeholder="Start typing..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="btn-container">
              <button
                className="btn-add-can btn-can"
                onClick={handleCloseCreateNoteModal}
              >
                Cancel
              </button>
              <button className="btn-add-can btn-add" onClick={handleAddNote}>
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
