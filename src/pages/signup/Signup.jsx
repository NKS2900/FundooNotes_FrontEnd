import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment,Snackbar } from '@material-ui/core';
import '../signup/signup.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { signup } from '../../services/UserService.js';
import { ThreeDRotationRounded } from '@material-ui/icons';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = { fname:'',lname:'',email: '', password: '', cpassword:'',
                hferror:'',
                hlerror:'',
                heerror:'',
                hpassrror:'',
                hcpasserror:'',
                ferror:false,
                lerror:false,
                eerror: false,
                perror: false,
                cerror:false,
                snackbarOpen: false,
                snackbarMessage: "",   
                severity:'',   
                hidden: false,
                };
  }

  handleCloseSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

  validation=()=>{
    let Email=this.state.email;
    let FirstName=this.state.fname;
    let LastName=this.state.lname;
    let Password=this.state.password;
    let CPassword=this.state.cpassword;
    let invalidForm=true;

    if(!FirstName.match(/^[A-Z]{1}[a-zA-Z]{2,}$/))
    {
      this.setState({ ferror:true});
      this.setState({ hferror:"First Letter In CAP & min 3 Letters."});
      invalidForm=false;
    }

    if(!LastName.match(/^[A-Z]{1}[a-zA-Z]{2,}$/))
    {
      this.setState({ lerror:true});
      this.setState({ hlerror:"First Letter In CAP & min 3 Letters."});
      invalidForm=false;
    }

    if(!Email.match(/^[a-zA-Z0-9.]{1,}@[a-z]{1,5}[.a-z]{1,5}[.]{1}[a-z]{1,4}$/))
    {
      this.setState({ eerror:true});
      this.setState({ heerror:"Invalid Email."});
      invalidForm=false;
    }

    if(!Password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*.-])[a-zA-Z0-9].{8,}$/))
      {
        this.setState({ perror:true});
        this.setState({ hpassrror:"Invalid Password Format."});
        invalidForm=false;
      }
      if(!CPassword.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*.-])[a-zA-Z0-9].{8,}$/))
      {
        this.setState({ cerror:true});
        this.setState({ hcpasserror:"Invalid Password Format."});
        if(CPassword !== Password){
        this.setState({ cerror:true});
        this.setState({ hcpasserror:"Password not matched!!!"});
        invalidForm=false;
        }
      }
      return invalidForm;
  }
// ----------------------------------------------//


  handleSubmit=()=>{
    let signupData ={
      firstName: this.state.fname,
      lastName: this.state.lname,
      email: this.state.email,
      password: this.state.password
    }
    if(this.validation())
    {
      signup(signupData).then((response)=>{
        if(response.status === 200){
          let responseMassege=response.data.message;
          this.setState({
            snackbarOpen: true,
            snackbarMessage: responseMassege,
          }
          );
          
          setTimeout(() => {
            this.props.history.push("/login");
          }, 4000);
       }
        console.log("Signup Response : ",response);
      }).catch((err)=>{
        this.setState({
          snackbarOpen: true,
          severity:'error',
          snackbarMessage: "User Registration Faield!!!",
        }
        );
        console.log(err);})
    }
    else{
      this.state.errmassege="Invalid Creadential";
    }
  }

  handleFname=(event)=>{
    this.setState({ ferror:false});
    this.setState({ hferror:""});
    this.setState({ fname:event.target.value});
    this.state.fname = event.target.value;
    console.log("Fname: ", this.state.fname);
  }

  handleLname=(event)=>{
    this.setState({ lerror:false});
    this.setState({ hlerror:""});
    this.setState({ lname:event.target.value});
    this.state.lname = event.target.value;
    console.log("Lname: ", this.state.lname);
  }

  handleEmail=(event)=>{
    this.setState({ eerror:false});
    this.setState({ heerror:""});
    this.setState({ email:event.target.value});
    this.state.email = event.target.value;
    console.log("Email: ", this.state.email);
  }

  handlePassword=(event)=>{
    this.setState({ perror:false});
    this.setState({ hpassrror:""});
    this.setState({ password:event.target.value});
    this.state.password = event.target.value;
    console.log("Password:", this.state.password);
  }
    
  handleCpass=(event)=>{
    this.setState({ cerror:false});
    this.setState({ hcpasserror:""});
    this.setState({ cpassword:event.target.value});
    this.state.cpassword = event.target.value;
    console.log("CPassword:", this.state.cpassword);
  }
  
  hideShow=()=> {
    this.setState({ hidden: !this.state.hidden });
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
                    <div id="fname"><TextField  label="First Name" onChange={this.handleFname} required variant="outlined"
                    helperText={this.state.hferror} error={this.state.ferror} /></div>

                    <div id="lname"><TextField  label="Last Name" onChange={this.handleLname} required variant="outlined" 
                    helperText={this.state.hlerror} error={this.state.lerror}/></div></div>

                    <div id="emaild">
                    <TextField id="email" label="Email" onChange={this.handleEmail} required variant="outlined" 
                    helperText={this.state.heerror} error={this.state.eerror}/>  
                    </div>

                    <div id="password1">
                    <TextField id="password" label="Password" onChange={this.handlePassword} required variant="outlined" 
                    type={this.state.hidden ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon id="eyeicon"/>
                          </InputAdornment>),}}
                          helperText={this.state.hpassrror} error={this.state.perror}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <VisibilityIcon id="eyeicon" onClick={this.hideShow}/>
                              </InputAdornment>
                            ),
                          }}
                          />
                    </div>
                    <div id="password2">
                    <TextField id="cpassword" label="Confirm Password" onChange={this.handleCpass} required variant="outlined" 
                     type={this.state.hidden ? 'text' : 'password'}
                     InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <VisibilityIcon id="eyeicon"/>
                        </InputAdornment>),}}
                        helperText={this.state.hpassrror} error={this.state.perror}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <VisibilityIcon id="eyeicon" onClick={this.hideShow}/>
                            </InputAdornment>
                          ),
                        }}
                      helperText={this.state.hcpasserror} error={this.state.cerror}
                    />
                    </div>
                    <div id="SignUpBtn">
                    <Button id="signupbt" variant="contained" onClick={this.handleSubmit} >SignUp</Button>
                    <label id="signmsg">Have an account with us  <a href='/login'>Login</a></label>
                    </div>
                </Card>
                <Snackbar
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={5000}
                    onClose={this.handleCloseSnackbar}
                    
                  ><Alert onClose={this.handleCloseSnackbar} severity={this.state.severity}>{this.state.snackbarMessage}</Alert>
                  </Snackbar>
            </div>
        )
    }
}

export default Signup;

