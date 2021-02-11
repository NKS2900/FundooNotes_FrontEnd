import React, { Component } from 'react';
import { TextField, Button,Card } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../reset/reset.css';
import { reset } from '../../services/UserService.js';

class Reset extends Component{
  constructor(props){
    super(props);
    this.state = { 
      email: '', 
      password: '', 
      snackbarOpen: false,
      snackbarMessage: "",
    };
  }

  SnackbarClose = (e) => {
    this.setState({ snackbarOpen: false });
  };

  handleCloseSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

  handleSubmit=()=>{
    let loginData ={
      email: this.state.email,
      password: this.state.password
    }

    reset(loginData).then((response)=>{
      if(response.status === 200){
        alert("Password Changed Successfully...");
        
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Login Succesfully.",
        }
        );
        this.props.history.push("/login");
      }
      else {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Enter correct credentials",
        });
      }
      console.log("Login Response : ",response);
    }
    
    ).catch((err)=>{console.log(err);})
  }

  handleEmail=(event)=>{
    this.setState({ email:event.target.value});
    this.state.email = event.target.value;
    console.log("Email: ", this.state.email);
  }

  handlePassword=(event)=>{
    this.setState({ password:event.target.value});
    this.state.password = event.target.value;
    console.log("Password:", this.state.password);
  }

  handleCpass=(event)=>{
    this.setState({ cpassword:event.target.value});
    this.state.cpassword = event.target.value;
    console.log("CPassword:", this.state.cpassword);
  }

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
                    <TextField id="textbox12" label="Email" onChange={this.handleEmail} required variant="outlined" /> <br/><br/>
                    <TextField id="textbox12" label="New Password" onChange={this.handlePassword} required variant="outlined" /> <br/><br/>
                    <TextField id="textbox12" label="Confirm New Password" onChange={this.handleCpass} required variant="outlined" />   <br/><br/>                                                              
                    <div><Button id="forgotbtn" variant="contained" onClick={this.handleSubmit}>Submit</Button></div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Reset;

