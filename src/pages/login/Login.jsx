import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment, helperText, Snackbar ,error} from '@material-ui/core';
import '../login/login.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
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

     useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    }));

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
            let responseMassege=response.data.message;

          this.setState({
            snackbarOpen: true,
            snackbarMessage: responseMassege,
          }
          );
      }
      else {
        let responseMassege=response.data.message;
        this.setState({
          snackbarOpen: true,
          snackbarMessage: responseMassege,
        }
        );
        }
        console.log("Login Response : ",response);
      }
      ).catch((err)=>{console.log(err);})
    }
    else{
      this.state.errmassege="Invalid Creadential";
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
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={this.state.snackbarOpen}
                          autoHideDuration={5000}
                          onClose={this.handleCloseSnackbar}
                         
                        ><Alert onClose={this.handleCloseSnackbar} severity="success">{this.state.snackbarMessage}</Alert>
                        </Snackbar>
                        
            </div>
        )
    }
}

export default withRouter(Login);

