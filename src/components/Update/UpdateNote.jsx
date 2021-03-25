import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import DisplayIcons from '../DisplayIcon/DisplayIcon.jsx';
import { Avatar, Chip, Paper } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import service from '../../services/NoteService.js'
import './update.scss'
// import './UpdateNote'

// const services = new Service()

const UpdateNote = (props ) => {
    const [noteId, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [Bgcolor, setColor] = useState();

    useEffect(() => {
        setTitle(props.item.title);
        setId(props.item.noteId);
        setColor(props.item.colour);
        setDescription(props.item.description)
    },[props] )

    const updateNote = () => {
        let data={
            title,
            description,
            colour:Bgcolor,
            noteId,
            userId:parseInt(window.localStorage.getItem('userId')),
        }
        if (title !== "" || description !== "") {
            service.UpdateNoteService(data)
              .then((response) => {
                props.GetNote()
                if(response.status === 200){
                console.log("Note added Sucessfully")
                }
              
            console.log("Title: ",title);
            props.GetNote()
            props.close()
        })
        .catch(() => {
            console.log("Some Error Occured while processing request")
          });
      } else {
        console.log("Title and description cannot be empty")
      }
    };

    return (
        <Dialog onClose={props.close} aria-labelledby="simple-dialog-title" open={props.open}>          
            <div className="updatecontainer1" style={{ backgroundColor: Bgcolor }}>
                <div className="note1" >
                    <div className="title pd">
                        <InputBase type="text" placeholder='Title' fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='note pd'>
                        <InputBase type="text" placeholder='Take a note...' fullWidth value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    {props.item.reminder?
                    <Chip className="noteChip" avatar={<Avatar><AccessAlarmIcon/></Avatar>} label={props.item.reminder}  />
                  :null}
                </div>
                <div className="toolbarrr">
                    <DisplayIcons GetNote={props.GetNote}  />
                    <div className="close-buttonnn">
                        <Button size="small" onClick={() => { updateNote() }}>Close</Button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default UpdateNote