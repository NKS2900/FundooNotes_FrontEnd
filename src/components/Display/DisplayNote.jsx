import React, { useState ,useEffect} from 'react';
import service from '../../services/NoteService.js';
import './displayNote.scss'
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx'
const DisplayNote= (props) => {
    const [noteList, setNoteList] = useState([]);
    
    // const response=service.getAllNote();
    //  setNoteList(response.data);

    const getNote = () => {
        service.getAllNote()
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
            getNote()
        }, []);
        
    return(
 
          <div id="display-note-container">
          <div className="card" >
        
                  {noteList.map((item) => (
                    <div className="addNote" style={{ backgroundColor: item.colour }}>
                       <div className="notes1" >
                          <div className="note pds"><b>{item.title}</b></div>
                          <div className='note pds'>{item.description}</div>
                      <div className="cardActions"><DisplayIcons  /></div>
                    </div> 
                     </div>
		      	    ))}
            
            </div>
           
        </div>
     
    );
}
export default DisplayNote