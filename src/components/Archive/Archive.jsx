import React, { useState, useEffect } from 'react';
import service from '../../services/NoteService.js';
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx'
import '../Archive/archive.scss'
import AppBar from '../AppBar/Appbar.jsx'
import DisplayNote from '../Display/DisplayNote.jsx'

const ArchiveNote= () => {
    const [noteList, setNoteList] = useState([]);

  const getArchiveNotes = () => {
    let userId = localStorage.getItem('userId');
    service.getArchiveNote(userId)
      .then((response) => {
        if (response.status === 200) {
          setNoteList(response.data.data);
        }
      })
      .catch(() => {
        console.log("Error While Fetching Notes!!!")
      });
  }

  useEffect(() => {
    getArchiveNotes()
  }, []);
        
  return (
    <div>
      <AppBar />
      <div className="displayArchive"><DisplayNote item={noteList} GetNote={getArchiveNotes}/></div>
    </div>
  );
}
export default ArchiveNote