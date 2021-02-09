import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import '../login/login.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Login extends Component{
  constructor(props){
    super(props)
  }

    handleChange=()=>{
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
                    <TextField id="textbox1" label="Email" required variant="outlined" />                                                                    <br/><br/>
                    <TextField id="textbox2" label="Password" required variant="outlined" 
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
                    <Button id="loginbtn" variant="contained">Login</Button>
                    </div>
                    <div id="SignUpBtn">
                    <div id="signup">
                    <label id="msg">Don't have an account with us ?</label>
                    </div>
                    <Button id="loginbtn" variant="contained" onClick= {this.handleChange}>SignUp</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Login;

