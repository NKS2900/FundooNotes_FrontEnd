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
import '../Note/note.scss';
import service  from '../../services/NoteService.js';
 
  // creater note rendering with functional component
  export default function AddNote() {
    const [open, setOpen] = useState(true);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState();
    const [color, setColor] = useState(false)
    const [showColorList, setShowColorList] = useState(false);
    const [colour,setBgcolor]=useState('');
    const [archive,setArchive]=useState(false);

    const DATA = [
      { title: "Default", id: "#fff" },
      { title: "Red", id: "#f28b82" },
      { title: "orange", id: "#fbbc04" },
      { title: "yellow", id: "#fff475" },
      { title: "green", id: "#ccff90" },
      { title: "Teal", id: "#a7ffeb" },
      { title: "Blue", id: "#a7ffeb" },
      { title: "Dark Blue", id: "#aecbfa" },
      { title: "purple", id: "#d7aefb" },
      { title: "pink", id: "#fdcfe8" },
      { title: "Brown", id: "#e6c9a8" },
      { title: "Gray", id: "#e8eaed" },
  ];

    const handleClick = () => {
      setOpen(false)
    }

    const handleClose = () => {
      setOpen(true)
    }

    const handleColor = () => {
      setColor(true)
  }

  const handleColorOut = () => {
    setColor(false)
  }

  const handleArchive = ()=> {
      setArchive(true);
      console.log(archive);
  }

    const AddNewNote = () => {
      setUserId(localStorage.getItem('userId'));
      const data ={ title,description,colour,archive,userId};

      if (title !== "" || description !== "") {
        service.addNote(data)
          .then((response) => {
            if(response.status === 200){
              setTitle("");
              setDescription("");
              setBgcolor("");
              window.location.reload();
            console.log("Note added Sucessfully")
            }
          })
          .catch(() => {
            console.log("Some Error Occured while processing request")
            setBgcolor("");
          });
      } else {
        setBgcolor("");
        console.log("Title and description cannot be empty")
      }
    };

  // UI design for create note
    return (
      <div className="notes">
        {open ?
          <div className="contain containerr" >
            <div className="note" onClick={handleClick}>
              <InputBase placeholder="Take a note..." id="MuiInputBase-root"></InputBase></div>
              <IconButton><CheckBoxOutlinedIcon /></IconButton>
              <IconButton> <BrushIcon /></IconButton>
              <IconButton> <ImageOutlinedIcon /></IconButton>
          </div> :
          <div className="contain container1" style={{ backgroundColor: colour }}>
            <div className="note1" >
              <div className="title pd">
                <InputBase placeholder='Title' id="MuiInputBase-root" fullWidth onChange={e => setTitle(e.currentTarget.value)} />
              </div>
              <div className='note pd'>
                <InputBase placeholder='Take a note...' id="MuiInputBase-root" fullWidth onChange={e=>setDescription(e.currentTarget.value)} />
              </div>
            </div>
            <div className="toolbar">
              <IconButton><AddAlertIcon aria-label="Remind me"/></IconButton>
              <IconButton><PersonAddIcon /></IconButton>
              <IconButton onClick={() => { handleColor(); setShowColorList(!showColorList); }} ><ColorLensIcon  onMouseOver={handleColor} /></IconButton>
              {showColorList ? (
                <div className={color ? "visible color-change" : " color-change"}
                    onMouseOver={handleColor} onMouseOut={handleColorOut} style={{ width: 150, height: 125 }}>
                    {DATA.map((item) => (
                        <button onMouseOver={handleColor}  
                            className="button-color" onClick={e=>setBgcolor(item.id)}
                            style={{ backgroundColor: item.id }}
                        ></button>
                    ))}
                </div>
            ) : null}
              <IconButton><ImageIcon /></IconButton>
              <IconButton onClick={() => {handleArchive(); AddNewNote(); }}><ArchiveIcon /></IconButton>
              <IconButton><MoreVertIcon /></IconButton>
              <div className="close-button">
                <Button size="small" onClick={() => { AddNewNote(); handleClose(); }} >Close</Button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }