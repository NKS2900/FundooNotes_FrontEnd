import React, { useState } from "react";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button } from "@material-ui/core";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import "./appbar.css";
import icon from "../../assets/keeps.png";
import bike from "../../assets/bike.jpg";
import {useHistory} from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
var checkOpen = "close";

export default function AppBarTool(props) {
  const [hide, setHide] = useState(false)
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  
  const drawerOpenClose = () => {
    if (checkOpen == "open") {
      setOpen(false);
      checkOpen = "close";
    } else if (checkOpen == "close") {
      setOpen(true);
      checkOpen = "open";
    }
  };

  const handleHideAccount = () => {
    setHide(!hide)
  }

  const handleLogout=()=>{
    localStorage.clear();
    history.push("/login");
  }
  
  const handleArchive = () =>{
    history.push("/archive");
  }

  const handleHome = () =>{
    history.push("/home");
  }

  return (
    <div className="main">
      <CssBaseline />
      <AppBar position="fixed" color="inherit"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}  
      >
        <Toolbar className="topBar">
          <div className="startOptions">
            <div className="menuButton">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={drawerOpenClose}
              >
                <MenuIcon />
              </IconButton>
            </div>
         
            <div className="headerIcon">
              <img className="headerIcon" src={icon} />
            </div>
            <div className="headerTitle">Fundoo</div>
          </div>
          <div className="search">
            <div className="searchIcon">
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
            <InputBase
              className="searchInput"
              placeholder="Search…"
              classes={{
                root: "inputRoot",
                input: "inputInput",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="appsContainer">
            <div className="image">
              <div className="button">
                <IconButton aria-label="open drawer" onClick={handleHideAccount} >
                  <Avatar alt='profile' src={bike} />
                </IconButton>
              </div>
            </div>
            <div className={hide ? "true profile" : "false profile"} >
              <div className="person" >
                <div className="avatarContainer">
                   <Avatar className="avatarIcon" alt='profile' src={bike} /> 
                </div>
                <div><b>{localStorage.getItem('firstName')} </b><b>{localStorage.getItem('lastName')}</b></div>
                <div><b>E-mail: </b>{localStorage.getItem('email')}</div>
                <div className="cardActionss">
                <Button className="signOut" variant="contained" id="signout" style={{
                  fontWeight: 700,
                  backgroundColor: "orange",
                }} onClick={handleLogout} >SIGN OUT</Button>
                
              </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
          <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        
      >
        <div className={classes.toolbar}>
        </div>
        <Divider />
        <List>
            <ListItem button key="Note" onClick={handleHome}>
              <ListItemIcon> <EmojiObjectsIcon/></ListItemIcon>
              <ListItemText primary="Notes" onClick={handleHome}/>
            </ListItem>
        </List>
        <List>
            <ListItem button key="Reminder">
              <ListItemIcon> <AddAlertIcon /> </ListItemIcon>
              <ListItemText primary="Reminder" />
            </ListItem>
        </List>
        <List>
            <ListItem button key="EditLabel">
              <ListItemIcon> <EditIcon /> </ListItemIcon>
              <ListItemText primary="Edit labels" />
            </ListItem>
        </List>
        <List>
            <ListItem button key="Archive" onClick={handleArchive}>
              <ListItemIcon> <ArchiveIcon /> </ListItemIcon>
              <ListItemText primary="Archive" onClick={handleArchive}/>
            </ListItem>
        </List>
        <List>
            <ListItem button key="Trash" >
              <ListItemIcon> <DeleteIcon /> </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
