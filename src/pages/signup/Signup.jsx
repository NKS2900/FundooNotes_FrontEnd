import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import '../signup/signup.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { signup } from '../../services/UserService.js';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = { fname:'',lname:'',email: '', password: '', cpassword:'' };
  }

  handleSubmit=()=>{
    let signupData ={
      firstName: this.state.fname,
      lastName: this.state.lname,
      email: this.state.email,
      password: this.state.password
      
    }
    // let email= this.state.email;
    // let password = this.state.password;
    // let response = login(loginData);
    // console.log("Login Response: ", response);
    signup(signupData).then((response)=>{
      if(response.status === 200){
        alert("Registration successfull...");
        this.props.history.push("/login");
      }
      console.log("Signup Response : ",response);
    }).catch((err)=>{console.log(err);})
  }

  handleFname=(event)=>{
    this.setState({ fname:event.target.value});
    this.state.fname = event.target.value;
    console.log("Fname: ", this.state.fname);
  }

  handleLname=(event)=>{
    this.setState({ lname:event.target.value});
    this.state.lname = event.target.value;
    console.log("Lname: ", this.state.lname);
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
            <div className="containers">
                <Card className="signup">
                <div className="fundooTitle">
                      <div className="f">F</div>
                      <div className="u">u</div>
                      <div className="n">n</div>
                      <div className="d">d</div>
                      <div className="o">o</div>
                      <div className="oo">o</div>
                    </div>
                    <div id="name">
                    <div id="fname"><TextField  label="First Name" onChange={this.handleFname} required variant="outlined" /></div>
                    <div id="lname"><TextField  label="Last Name" onChange={this.handleLname} required variant="outlined" /></div>
                        </div>
                    <div id="emaild">
                    <TextField id="email" label="Email" onChange={this.handleEmail} required variant="outlined" />  
                    </div>
                    <div id="password1">
                    <TextField id="password" label="Password" onChange={this.handlePassword} required variant="outlined" 
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon />
                          </InputAdornment>),}}/>
                    </div>
                    <div id="password2">
                    <TextField id="cpassword" label="Confirm Password" onChange={this.handleCpass} required variant="outlined" 
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    </div>
                    <div id="SignUpBtn">
                    <Button id="signupbt" variant="contained" onClick={this.handleSubmit} >SignUp</Button>
                    <label id="signmsg">Have an account with us  <a href='/login'>Login</a></label>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(Signup);

