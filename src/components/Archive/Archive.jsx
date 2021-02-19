import React, { useState ,useEffect} from 'react';
import service from '../../services/NoteService.js';
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx'
import '../Archive/archive.scss'
import AppBar from '../AppBar/Appbar.jsx'

const ArchiveNote= () => {
    const [noteList, setNoteList] = useState([]);
    
    // const response=service.getAllNote();
    //  setNoteList(response.data);

    const getArchiveNotes = () => {
      let userId=localStorage.getItem('userId');
        service.getArchiveNote(userId)
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
          getArchiveNotes()
        }, []);
        
    return(
          <div>
            <AppBar />
          <div id="display-note-container">
          <div className="cardss" >
                  {noteList.map((item) => (
                    <div className="addNote" style={{ backgroundColor: item.colour }}key={item.noteId}>
                       <div className="notes1" >
                          <div className="note pds"><b>{item.title}</b></div>
                          <div className='note pds'>{item.description}</div>
                          <div className="cardActionIcon">
                            <DisplayIcons item={item} GetNote={getArchiveNotes}/></div>
                      </div> 
                     </div>
		      	    ))}
            
            </div>
            </div>
        </div>
    );
}
export default ArchiveNote