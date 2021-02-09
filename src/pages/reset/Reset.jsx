import React, { Component } from 'react';
import { TextField, Button,Card } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../reset/reset.css';

class Reset extends Component{
  constructor(props){
    super(props)
  }

//     handleChange=()=>{
//       this.props.history.push("/signup");
//   };
    render(){
        return(
            <div className="maindiv">
                <Card className="resetcard">
                <div id="fundoohead">
                <ArrowBackIcon id='backarrows' onClick={()=>this.props.history.push("/login")}/>
                <div className="fundooTitle">
                      <div className="f">F</div>
                      <div className="u">u</div>
                      <div className="n">n</div>
                      <div className="d">d</div>
                      <div className="o">o</div>
                      <div className="oo">o</div>
                    </div>
                    </div>
                    <div id="text-fieldss">
                    <TextField id="textbox12" label="Email" required variant="outlined" /> <br/><br/>
                    <TextField id="textbox12" label="New Password" required variant="outlined" /> <br/><br/>
                    <TextField id="textbox12" label="Confirm New Password" required variant="outlined" />   <br/><br/>                                                              
                    <div><Button id="forgotbtn" variant="contained">Submit</Button></div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Reset;

