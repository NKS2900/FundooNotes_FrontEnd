import React, { useState ,useEffect} from 'react';
import service from '../../../services/NoteService.js';
import DisplayIcons from '../../DisplayIcon/DisplayIcon.jsx'
import '../DisplayReminder/displayReminder.scss'
import AppBar from '../../AppBar/Appbar.jsx'
import Note from '../../Note/Note.jsx'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DisplayNote from '../DisplayNote.jsx'

const DisplayReminder= ({ GetNote }) => {
    const [noteList, setNoteList] = useState([]);
    
    const getReminders = () => {
      let userId=localStorage.getItem('userId');
        service.getReminder(userId)
        .then((response) => {
          if(response.status === 200){
            setNoteList(response.data.data);
            GetNote()
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
            <div className="createNote"><Note item={noteList} GetNote={getReminders}/></div>
            <div className="displayNotes"><DisplayNote item={noteList} GetNote={getReminders}/></div>
        </div>
    );
}
export default DisplayReminder