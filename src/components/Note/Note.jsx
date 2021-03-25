import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Button from '@material-ui/core/Button';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import '../Note/note.scss';
import service  from '../../services/NoteService.js';
import Pin from '../../assets/pin.png'
import Unpin from '../../assets/unpin.png'
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {TextField} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,  
  },
  root1: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }}
}));
  // creater note rendering with functional component
  export default function AddNote(props) {

    const [open, setOpen] = useState(true);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState(0);
    const [color, setColor] = useState(false)
    const [showColorList, setShowColorList] = useState(false);
    const [colour, setBgcolor] = useState('');
    const [archive, setArchive] = React.useState(false);
    const [pin, setPin] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [reminders, setReminders]= React.useState(false);
    const [showReminder, setShowReminder]=React.useState(false);
    const [showDateTime, setShowDateTime] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [showChip, setShowChip] = React.useState(false);
    const [showlabel,setShowLabel] = React.useState(false);
    //const [reminder, setReminder]= React.useState('');
    const classes = useStyles();
    //const userid=localStorage.getItem('userId');
    var reminder=selectedDate+" "+selectedTime;
    
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

    const handleSignout = () => {
      setOpen(true)
    }

    const handleColor = () => {
      setColor(true)
    }

    const handleColorOut = () => {
      setColor(false)
    }

    const handleArchive = () => {   
      setArchive(!archive);
      console.log("archive : ",archive)
    }

  const handlePin = () => {
    setPin(true);
  }
  const handleUnPin = () => {
    setPin(false);
  }
  
  const handleMore = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReminder = () => {
    setReminders(true)
  }

  const handleReminderOut = () => {
    setReminders(false)
  }

  const handleChipDelete = () => {
    reminder="";
    setSelectedDate("");
    setSelectedTime("");
    setShowChip(false);

  }

    const AddNewNote = () => {
      if(selectedTime === null || selectedDate === null){
        reminder=null;
      }
      console.log(reminder);
      const data ={ 
              title,
              description,
              reminder,
              colour,
              archive,
              pin,
              userId:parseInt(window.localStorage.getItem('userId')),
            };

      console.log("archive: ",archive);
      if (title !== "" || description !== "") {
        service.addNote(data)
          .then((response) => {
            props.GetNote()
            if(response.status === 200){
              setTitle("");
              setDescription("");
              setBgcolor("");
              setPin(false);
              setArchive(false);
              setSelectedDate('');
              setSelectedTime('');
            console.log("Note added Sucessfully")
            }
          })
          .catch(() => {
            console.log("Some Error Occured while processing request")
            setBgcolor("");
            setSelectedDate('');
            setSelectedTime('');
            setPin(false);
          });
      } else {
        setBgcolor("");
        setPin(false);
        setSelectedDate('');
        setSelectedTime('');
        console.log("Title and description cannot be empty")
      }
    };
    //-----------------------

  // UI design for create note
    return (
      
      <div className="notes">
        {open ?
          <div className="contain containerr" >
            <div className="note" onClick={handleClick}>
              <InputBase placeholder="Take a note..." id="MuiInputBase-root"></InputBase></div>
              <Tooltip title="Add Image">
              <IconButton> <ImageOutlinedIcon /></IconButton>
              </Tooltip>
          </div> :
          <div className="contain container1" style={{ backgroundColor: colour }}>
            <div className="note1" >
              <div className="title pd">
                
                <InputBase placeholder='Title' id="MuiInputBase-root" fullWidth onChange={e => setTitle(e.currentTarget.value)} />
                <div className="pinunpin">{pin ? <img id="pin" src={Pin} onClick={handleUnPin}/> : <img id="pin" src={Unpin} onClick={handlePin}/> }</div>
              </div>
              <div className='note pd'>
                <InputBase placeholder='Take a note...' id="MuiInputBase-root" fullWidth onChange={e=>setDescription(e.currentTarget.value)} />
              </div>
              <div>
                  {showChip ?(
                  <div className={classes.root1} id="chip">
                      <Chip label={reminder} onDelete={handleChipDelete}/>
                  </div>):null
                  }
              </div>
            </div>
            <div>
            <div className="toolbar">
              <Tooltip title="Remind me">
              <IconButton onClick={() => { handleReminder(); setShowReminder(!showReminder) }}>   
                <AddAlertIcon aria-label="Remind me"/></IconButton>
              </Tooltip>

              {/* ----------Reminder----------- */}

            {showReminder ? (
                <div className={reminders ? "visible reminderr-change" : "NV reminderr-change"}
                     style={{ width: 250, height: 218 }}>
                    
                    <div className={classes.root}>
                        <List component="nav" >
                        <ListItem >
                            <ListItemText  primary="Reminder:" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Later Today" />
                            <div>8:00PM</div>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Tommorro" />
                            <div>8:00AM</div>
                        </ListItem>
                        <ListItem button onClick={() => setShowDateTime(!showDateTime)}>
                        <AccessTimeIcon style={{ marginRight: "4%" }} />
                            <ListItemText primary="Pick date & time" />
                        </ListItem>
                        </List>
                    </div>
                </div>
            ) : null}
      
            {showDateTime ? (
              <div className={reminders ? "visible reminderr-change" : "NV reminderr-change"}
              style={{ width: 250, height: 220 }}>
              <div className={classes.root}>
                <List component="nav" >
                  <ListItem >
                    <ArrowBackIcon style={{ marginRight: "7%", cursor: "pointer" }} onClick={() => setShowDateTime(!showDateTime)} />
                    <ListItemText  primary="Pick date & time:" />
                  </ListItem>
                <Divider />
                <ListItem id="dateTimeText">
                <TextField id="textDateTime" type="date" onChange={e => setSelectedDate(e.currentTarget.value)}></TextField>
                </ListItem>
                <ListItem id="dateTimeText">
                <TextField id="textDateTime"  type="time" onChange={e => setSelectedTime(e.currentTarget.value)}></TextField>
                </ListItem>
                <ListItem id="saveButton">
                <Button variant="outlined" onClick={() =>  setShowChip(!showChip) } >
                  Save
                </Button>
                </ListItem>
                </List>
              </div>
              </div>
            ) : null}
    
            {/* ------------------------- */}
              <Tooltip title="Collaborator">
              <IconButton><PersonAddIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Change color">
              <IconButton onClick={() => { handleColor(); setShowColorList(!showColorList); }} ><ColorLensIcon  onMouseOver={handleColor} /></IconButton>
              </Tooltip>
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
              <Tooltip title="Add Image">
              <IconButton><ImageIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Archive">
              <IconButton onClick={() => {handleArchive(); AddNewNote(); }}><ArchiveIcon /></IconButton>
              </Tooltip>
              <Tooltip title="More">
              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMore}><MoreVertIcon /></IconButton>
              </Tooltip>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => {
                    handleClose(); setShowLabel(!showlabel)
                }}>Add Label</MenuItem>
            </Menu>
            {showlabel ? (
              <div className={reminders ? "visible reminderr-change" : "NV reminderr-change"}
              style={{ width: 150, height: 100 }}>
              <div className={classes.root}>
                <List component="nav" >
                  <ListItem >
                    <ListItemText  primary="Label" />
                  </ListItem>
                <Divider />
                <ListItem id="dateTimeText">
                <TextField id="textDateTime" type="text" ></TextField>
                </ListItem>
                <ListItem id="saveButton">
                <Button variant="outlined" >
                  Create
                </Button>
                </ListItem>
                </List>
              </div>
              </div>
            ) : null}


              <div className="close-button">
                <Button size="small" onClick={() => { AddNewNote(); handleSignout(); }} >Close</Button>
              </div>
            </div>
            </div>
          </div>
        }
      </div>
    );
  }