import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import '../login/login.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Login extends Component{
    render(){
        return(
            <div className="container">
                <Card className="Login">
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
                    </div>
                    <div id="LoginBtn">
                    <Button id="loginbtn" variant="contained">Login</Button>
                    </div>
                    <div id="SignUpBtn">
                    <div id="signup">
                    <label id="msg">Don't have an account with us ?</label>
                    </div>
                    <Button id="loginbtn" variant="contained">SignUp</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Login;

