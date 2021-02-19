import React, { useState ,useEffect} from 'react';
import service from '../../../services/NoteService.js';
import DisplayIcons from '../../DisplayIcon/DisplayIcon.jsx'
import '../DisplayReminder/displayReminder.scss'
import AppBar from '../../AppBar/Appbar.jsx'
import Note from '../../Note/Note.jsx'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
const DisplayReminder= () => {
    const [noteList, setNoteList] = useState([]);
    
    // const response=service.getAllNote();
    //  setNoteList(response.data);

    const getReminders = () => {
      let userId=localStorage.getItem('userId');
        service.getReminder(userId)
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
            getReminders()
        }, []);
        
    return(
          <div>
            <AppBar />
            <div className="createNote"><Note /></div>
          <div id="display-note-reminder">
          <div className="cardss" >
                  {noteList.map((items) => (
                    <div className="addNote" style={{ backgroundColor: items.colour }} key={items.noteId}>
                       <div className="notes1" >
                          <div className="note pds"><b>{items.title}</b></div>
                          <div className='note pds'>{items.description}</div>
                          <div className="Chip">
                            <Chip avatar={<Avatar><AccessAlarmIcon/></Avatar>} label={items.reminder}  /></div>
                          {/* <div className='note pds'>{items.reminder}</div> */}
                          <div className="cardActionIcon"><DisplayIcons item={items} GetNote={getReminders}/></div>
                      </div> 
                     </div>
		      	    ))}
            </div>
            </div>
        </div>
    );
}
export default DisplayReminder