import React, { useState , useEffect } from 'react'
import '../DisplayIcon/displayIcon.scss';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import service from '../../services/NoteService.js'
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
        
    },
  }));

const DisplayIcons = ({ item,GetNote, props }) => {

    const [color, setColor] = useState(false)
    const [showColorList, setShowColorList] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [reminder, setReminder]= useState(false);
    const [showReminder, setShowReminder]=useState(false);
    const [showDateTime, setShowDateTime] = useState(false);
    const classes = useStyles();
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const selectColor = (value) => {
        props.setBgColor(value);
    };

    const handleColor = () => {
        setColor(true)
    }

    const handleColorOut = () => {
        setColor(false)
    }

    const handleReminder = () => {
        setReminder(true)
    }

    const handleReminderOut = () => {
        setReminder(false)
    }

    const handleTrashNotes = () => {
        console.log("Note_ID: ",item.noteId);

        service.DeletNote(item.noteId).then(res => {
            console.log(res)
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
        GetNote();
    }

    const handleUnarchive = () => {
        console.log("Note_ID: ",item.noteId);

        service.UnArchive(item.noteId).then(res => {
            console.log(res)
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
         //GetNote();
    }

    return (
        <div className="tools">
            <Tooltip title="Reminde me">
            <IconButton aria-label="Remind me" edge="start" onClick={() => { handleReminder(); setShowReminder(!showReminder) }}>
                <AddAlertOutlinedIcon fontSize="small" />
            </IconButton>
            </Tooltip>
            {/* ----------Reminder----------- */}

            {showReminder ? (
                <div className={reminder ? "visible reminderrr-change" : "NV reminderrr-change"}
                     style={{ width: 250, height: 220}}>
                    
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
              <div className={reminder ? "visible reminderrr-change" : "NV reminderrr-change"}
              style={{ width: 250, height: 220 }}>  
              <div className={classes.root}>
              <List component="nav" >
                <ListItem >
                    <ArrowBackIcon style={{ marginRight: "7%", cursor: "pointer" }} onClick={() => setShowDateTime(!showDateTime)} />
                    <ListItemText  primary="Pick date & time:" />
                </ListItem>
                <Divider />
                </List>
              </div>
              <Divider />
              </div>
            ) : null}
            {/* ------------------------- */}
            <Tooltip title="Collaborator">
            <IconButton aria-label="Collaborator">
                <PersonAddOutlinedIcon fontSize="small" />
            </IconButton>
            </Tooltip>
            <Tooltip title="Change color">
            <IconButton aria-label="Change color" 
                 onClick={() => { handleColor(); setShowColorList(!showColorList) }}>
                <ColorLensOutlinedIcon fontSize="small" onMouseOver={handleColor} />
            </IconButton>
            </Tooltip>
            {showColorList ? (
                <div className={color ? "visible color-change" : "NV color-change"}
                    onMouseOver={handleColor} onMouseOut={handleColorOut} style={{ width: 150, height: 125 }}>
                    {DATA.map((item) => (
                        <button onMouseOver={handleColor} onClick={() => { selectColor(item.id); }}
                            className="button-color"
                            style={{ backgroundColor: item.id }}
                        ></button>
                    ))}
                </div>
            ) : null}
            <Tooltip title="Add image">
            <IconButton aria-label="Add image">
                <ImageOutlinedIcon fontSize="small" />
            </IconButton>
            </Tooltip>
            <Tooltip title="Archive note">
            <IconButton aria-label="Archive note" onClick={handleUnarchive}>
                <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
            </Tooltip>
            <Tooltip title="More">
            <IconButton aria-label="More" onClick={handleClick}>
                <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
            </Tooltip>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => {
                    handleClose();
                    handleTrashNotes()
                }}>Delete Note</MenuItem>
                <MenuItem>Add Label</MenuItem>
            </Menu>
        </div>
    )
}

export default DisplayIcons