import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import Button from '@material-ui/core/Button';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../Note/note.css';

  // creater note rendering with functional component
  export default function AddNote() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(false)
    }
  
    const handleClose = () => {
      setOpen(true)
    }
  // Ui design for create note
    return (
      <div className="notes">
        {open ?
          <div className="contain containerr" >
            <div className="note" onClick={handleClick}>
              <InputBase placeholder="Take a note..."></InputBase></div>
              <IconButton><CheckBoxOutlinedIcon /></IconButton>
              <IconButton> <BrushIcon /></IconButton>
              <IconButton> <ImageOutlinedIcon /></IconButton>
          </div> :
          <div className="contain container1" >
            <div className="note1" >
              <div className="title pd">
                <InputBase placeholder='Title' fullWidth  />
              </div>
              <div className='note pd'>
                <InputBase placeholder='Take a note...' fullWidth />
              </div>
            </div>
            <div className="toolbar">
              <IconButton><AddAlertIcon aria-label="Remind me"/></IconButton>
              <IconButton><PersonAddIcon /></IconButton>
              <IconButton><ColorLensIcon /></IconButton>
              <IconButton><ImageIcon /></IconButton>
              <IconButton><ArchiveIcon /></IconButton>
              <IconButton><MoreVertIcon /></IconButton>
              <div className="close-button">
                <Button size="small" onClick={handleClose} >Close</Button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }