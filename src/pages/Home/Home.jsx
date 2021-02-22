import React, { useState,useEffect } from "react";
import AppBar from '../../components/AppBar/Appbar.jsx'
import AddNote from '../../components/Note/Note.jsx'
import DisplayNote from '../../components/Display/DisplayNote.jsx'
import service from '../../services/NoteService.js';
import '../Home/home.css'

export default function Home() {
   const [noteList, setNoteList] = useState([]);

  const GetNote = () => {
    let userId=localStorage.getItem('userId');
      service.getAllNote(userId)
      .then((response) => {
        if(response.status === 200){
          setNoteList(response.data.data);
        }
      })
      .catch(() => {
        console.log("Error While Fetching Notes!!!")
      });
  }

    useEffect(() => {
        GetNote()
    }, []);

  return (
    <div className="parent">
      <AppBar GetNote={GetNote}/>
      <div className="card-body text-center" id="body">
        <div className="main">
          <AddNote GetNote={GetNote}/>
        </div>
      </div>
        <div className="displayNotes"><DisplayNote item={noteList} GetNote={GetNote}/></div>
    </div>
  )
}