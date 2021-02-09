import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import '../signup/signup.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Signup extends Component{
    render(){
        return(
            <div className="containers">
                <Card className="signup">
                    <div id="name">
                    <TextField id="fname" label="First Name" required variant="outlined" />
                    <TextField id="lname" label="Last Name" required variant="outlined" />
                        </div>
                    <div id="emaild">
                    <TextField id="email" label="Email" required variant="outlined" />  
                    </div>
                    <div id="password1">
                    <TextField id="password" label="Password" required variant="outlined" 
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon />
                          </InputAdornment>),}}/>
                    </div>
                    <div id="password2">
                    <TextField id="cpassword" label="Confirm Password" required variant="outlined" 
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
                    <Button id="signupbt" variant="contained">SignUp</Button>
                    <label id="msg">have an account with us ?</label>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Signup;

