import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment, helperText, Snackbar ,error} from '@material-ui/core';
import '../login/login.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { login } from '../../services/UserService.js';

class Login extends Component{
    constructor(props){
      super(props);
      this.state = { 
        email: '', 
        password: '', 
        emailerror:'',
        mobilerror:'',
        eerror: false,
        merror: false,
        snackbarOpen: false,
        snackbarMessage: "",
      };
    }

    SnackbarClose = () => {
      this.setState({ snackbarOpen: false });
    };
  
    handleCloseSnackbar = () => {
      this.setState({ snackbarOpen: false });
    };

    validation=()=>{
      let Email=this.state.email;
      let Pass=this.state.password
      let invalidForm=true;

      if(!Email.match(/^[a-zA-Z0-9.]{1,}@[a-z]{1,5}[.a-z]{1,5}[.]{1}[a-z]{1,4}$/))
      {
        this.setState({ eerror:true});
        this.setState({ emailerror:"Invalid Email."});
        invalidForm=false;
      }

      if(!Pass.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*.-])[a-zA-Z0-9].{8,}$/))
        {
          this.setState({ merror:true});
          this.setState({ mobilerror:"Invalid Password Format."});
          invalidForm=false;
        }
        return invalidForm;
    }
// ----------------------------------------------
    handleLogin=()=>{
      
      let loginData ={
        email: this.state.email,
        password: this.state.password
      }
      if(this.validation())
      {
      login(loginData).then((response)=>{
        if(response.status === 200){
          alert("Login Successfull...");
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "Login",
          }
          );
        }
        else {
          // this.setState({ snackbarOpen:true});
          // this.setState({ snackbarMessage:"Enter correct credentials"});
          //this.state.snackbarOpen=true;
          //this.state.snackbarMessage= "Enter correct credentials";
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "Enter correct credentials",
          });
        }
        console.log("Login Response : ",response);
      }
      ).catch((err)=>{console.log(err);})
    }
    else{
      this.state.errmassege="Invalid email";
      //alert("Invalid email");
    }
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
    handleSignup=()=>{
      this.props.history.push("/signup");
  };

    render(){
        return(
            <div className="container">
                <Card className="Login">
                <div className="fundooTitle">
                      <div className="f">F</div>
                      <div className="u">u</div>
                      <div className="n">n</div>
                      <div className="d">d</div>
                      <div className="o">o</div>
                      <div className="oo">o</div>
                    </div>
                    <div id="text-field">
                    <TextField id="textbox1" label="Email"  variant="outlined"
                     onChange={this.handleEmail}  helperText={this.state.emailerror}  
                     error={this.state.eerror}/>                                                                    <br/><br/>
                    
                    <TextField id="textbox2"  label="Password" variant="outlined" 
                     onChange={this.handlePassword} helperText={this.state.mobilerror} error={this.state.merror}  
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <label id="forgotmsg"><a href='/forgot'>Forgot Password</a></label>
                    </div>
                    <div id="LoginBtn">
                    <Button type="submit" id="loginbtn" variant="contained" onClick={this.handleLogin}>Login</Button>
                    </div>
                    <div id="SignUpBtn">
                    <div id="signup">
                    <label id="msg">Don't have an account with us ?</label>
                    </div>
                    <Button id="loginbtn" variant="contained" onClick={this.handleSignup}>SignUp</Button>
                    </div>
                </Card>
                      <Snackbar
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          open={this.state.snackbarOpen}
                          autoHideDuration={5000}
                          massege={this.state.snackbarMessage}
                        ></Snackbar>
            </div>
        )
    }
}

export default withRouter(Login);

