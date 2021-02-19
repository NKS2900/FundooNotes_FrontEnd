import React, { useState ,useEffect} from 'react';
import service from '../../services/NoteService.js';
import './displayNote.scss'
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx'
import Pin from '../../assets/pin.jpeg'
import Unpin from '../../assets/unpin.jpeg'
import { Avatar,Chip } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const DisplayNote= (props) => {
    const [noteList, setNoteList] = useState([]);
    const [pin, setPin] = useState(false);
    // const response=service.getAllNote();
    //  setNoteList(response.data);

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
        
    const handlePin = () => {
      setPin(true);
    }
    const handleUnPin = () => {
      setPin(false);
    }
    return(
 
          <div id="display-note-container">
          <div className="card" >
                  {noteList.reverse().map((item) => (
                    <div className="addNote" style={{ backgroundColor: item.colour }} key={item.noteId}>
                       <div className="notes1"  >
                         {/* <div className="noteImage"><img src={item.image}/></div> */}
                          <div className="note pds"><b>{item.title}</b>
                          {/* <div>{pin ? <img id="pin" src={Pin} onClick={handleUnPin}/> : <img id="pin" src={Unpin} onClick={handlePin}/> }</div> */}
                          </div>
                          <div className='note pds'>{item.description}</div>
                          <div className="Chip">
                            {item.reminder}
                          {/* <Chip avatar={<Avatar><AccessAlarmIcon/></Avatar>} label={item.reminder}  /> */}
                          </div>
                      <div className="cardActions"><DisplayIcons item={item} GetNote={GetNote}/></div>
                    </div> 
                     </div>
		      	    ))}
            
            </div>
        
        </div>
     
    );
}
export default DisplayNote