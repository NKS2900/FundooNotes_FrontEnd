import React, { Component } from 'react';
import { TextField, InputAdornment,Button,Card,Snackbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../reset/reset.css';
import { reset } from '../../services/UserService.js';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert from '@material-ui/lab/Alert';

class Reset extends Component{
  constructor(props){
    super(props);
    this.state = { 
      email: '', 
      password: '', 
      cpassword:'',
      hpassrror:'',
      hcpasserror:'',
      perror: false,
      cerror:false,
      snackbarOpen: false,
      snackbarMessage: "",
      severity:'',
      hidden: false,
    };
  }

  validation=()=>{
    let Email=this.state.email;
    let Password=this.state.password;
    let CPassword=this.state.cpassword;
    let invalidForm=true;

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
        if(CPassword != Password){
        this.setState({ cerror:true});
        this.setState({ hcpasserror:"Password not matched!!!"});
        invalidForm=false;
        }
      }
      return invalidForm;
  }


  handleSubmit=()=>{
    let loginData ={
      email: this.state.email,
      password: this.state.password
    }

    if(this.validation())
    {
    reset(loginData).then((response)=>{
      if(response.status === 200){
        alert("Password Changed Successfully...");
        
        let responseMassege=response.data.message;
          this.setState({
          snackbarOpen: true,
          snackbarMessage: responseMassege,
          }
        );
        setTimeout(() => {
          this.props.history.push("/login");
        }, 3000);
        }
      else {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Enter correct credentials",
        });
      }
      console.log("Login Response : ",response);
    }
    
    ).catch((err)=>{
      this.setState({
        snackbarOpen: true,
        severity:'error',
        snackbarMessage: "User Not Found!!!",
      }
      );
      console.log(err);})
  }
  else{
    this.state.errmassege="Invalid Creadential";
  }
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
                    <TextField id="textbox12" label="Email" variant="outlined" onChange={this.handleEmail} 
                     helperText={this.state.heerror} error={this.state.eerror} required  /> <br/><br/>
                    <TextField id="textbox12" label="New Password" onChange={this.handlePassword} required variant="outlined" 
                    type={this.state.hidden ? 'text' : 'password'}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <VisibilityIcon id="eyeicon" onClick={this.hideShow}/>
                                  </InputAdornment>
                                ),
                              }}
                                  helperText={this.state.hpassrror} error={this.state.perror}
                    /> <br/><br/>
                    <TextField id="textbox12" label="Confirm Password" onChange={this.handleCpass} required variant="outlined" 
                    type={this.state.hidden ? 'text' : 'password'}
                     InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <VisibilityIcon id="eyeicon" onClick={this.hideShow}/>
                        </InputAdornment>
                      ),
                    }}
                      helperText={this.state.hcpasserror} error={this.state.cerror}
                    />  <br/><br/>                                                              
                    <div><Button id="forgotbtn" variant="contained" onClick={this.handleSubmit}>Submit</Button></div>
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

export default Reset;

