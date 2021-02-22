import React, { useState, useEffect } from 'react';
import service from '../../services/NoteService.js';
import './displayNote.scss'
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx'
import Pin from '../../assets/pin.png'
import Unpin from '../../assets/unpin.png'
import { Avatar, Chip } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const DisplayNote = (props) => {
  const [noteList, setNoteList] = useState([]);
  const [pin, setPin] = useState(false);
  const [chipId,setChipId]=useState('');
  const [bgColor, setBgColor] = useState('#fff')
  // const response=service.getAllNote();
  //  setNoteList(response.data);

  // const GetNote = () => {
  //   let userId=localStorage.getItem('userId');
  //     service.getAllNote(userId)
  //     .then((response) => {
  //       if(response.status === 200){
  //         setNoteList(response.data.data);
  //       }
  //     })
  //     .catch(() => {
  //       console.log("Error While Fetching Notes!!!")
  //     });
  // }

  //     useEffect(() => {
  //         GetNote()
  //     }, []);

  const handlePin = () => {
    setPin(true);
  }
  const handleUnPin = () => {
    setPin(false);
  }
  
  const handleReminderChip = (noteId) => {
    console.log("Note_ID: ",noteId);
        service.UnSetReminder(noteId).then(res => {
            console.log(res)
        props.GetNote()
            
        }).catch(err => {
            console.log(err);
        })
  }

    //console.log(props.GetNote())


  return (

    <div id="display-note-container">
      <div className="card" >
        
        {props.item.reverse().map((item) => (
          <div className="addNote" style={{ backgroundColor: item.colour }} key={item.noteId}>
            <div className="notes1"  >
              {/* <div className="noteImage"><img src={item.image}/></div> */}
              <div className="note pds"><b>{item.title}</b>
                {/* <div>
                  {item.pin?
                      <div>{pin ? <img id="pin" src={Pin} onClick={handleUnPin}/> : <img id="pin" src={Unpin} onClick={handlePin}/> }</div> 
                      :false}
                </div> */}
              </div>
              <div className='note pds'>{item.description}</div>
         
                {/* {item.reminder} */}
                {item.reminder?
                <Chip className="noteChip" avatar={<Avatar><AccessAlarmIcon/></Avatar>} label={item.reminder} onDelete={e => handleReminderChip(item.noteId)} />
                  :null}
              <div className="cardActions"><DisplayIcons setBgColor={setBgColor} item={item} GetNote={props.GetNote} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DisplayNote