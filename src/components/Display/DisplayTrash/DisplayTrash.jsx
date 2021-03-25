import React, { useState ,useEffect} from 'react';
import service from '../../../services/NoteService.js';
import DisplayIcons from '../../DisplayIcon/DisplayIcon.jsx'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import '../DisplayTrash/displayTrash.scss';
import AppBar from '../../AppBar/Appbar.jsx';

const DisplayTrash= () => {
    const [noteList, setNoteList] = useState([]);
    
    // const response=service.getAllNote();
    //  setNoteList(response.data);

    const getTrashNotes = () => {
      let userId=localStorage.getItem('userId');
        service.getTrahsNote(userId)
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
        getTrashNotes()
    }, []);

    const handleRestore = (noteId) => {
      console.log("Note_ID: ",noteId);
        service.RestoreTrashed(noteId).then(res => {
            console.log(res)
            getTrashNotes()
           
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDeleteForever = (noteId) => {
      console.log("Note_ID: ",noteId);
        service.DeleteForever(noteId).then(res => {
          
            console.log(res)
            getTrashNotes()
           
        }).catch(err => {
            console.log(err);
        })
    }
        
    const handleEmptyTrash = () => {
        console.log("EmptyTrash: ");
        service.EmptyTrash().then(res => {
          
            console.log(res)
            getTrashNotes()
           
        }).catch(err => {
            console.log(err);
        })
    }

    return(
          <div>
            <AppBar />
          <div id="display-note-container">
          <div role="button" className="emptyTrash" onClick={handleEmptyTrash}>Empty Trash</div>
          <div className="cardsss" >
                  {noteList.map((item) => (
                    <div className="addNote" style={{ backgroundColor: item.colour }} key={item.noteId}>
                       <div className="notes1" >
                          <div className="note pds"><b>{item.title}</b></div>
                          <div className='note pds'>{item.description}</div>
                          <div className="cardActionIcon">

                          <Tooltip title="Delete forever">
                            <IconButton aria-label="Delete Forever" onClick={e => handleDeleteForever(item.noteId)}>
                              <DeleteForeverIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Restore">
                            <IconButton aria-label="Restore" onClick={e => handleRestore(item.noteId)}>
                              <RestoreFromTrashIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div> 
                     </div>
		      	    ))}
            </div>
            </div>
        </div>
    );
}
export default DisplayTrash