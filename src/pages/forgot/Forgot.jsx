import React, { Component } from 'react';
import { TextField, Button,Card } from '@material-ui/core';
import '../forgot/forgot.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { forgot } from '../../services/UserService.js';

class Forgot extends Component{
    constructor(props){
        super(props);
        this.state = { 
          email: '', 
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
  
      handleSend=()=>{
         let Email= this.state.email;
        // let loginData ={
        //   email: this.state.email, 
        // }
        forgot(Email).then((response)=>{
          if(response.status === 200){
            alert("Send Successfully...");
            this.props.history.push("/login");
            this.setState({
              snackbarOpen: true,
              snackbarMessage: "Login Succesfully.",
            }
            );
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

    render(){
        return(
            <div className="maindiv">
                <Card className="forgotcard">
                    <div id="headarrow">
                <ArrowBackIcon id='backarrow' onClick={()=>this.props.history.push("/login")}/>
                <div className="fundooTitle">
                      <div className="f">F</div>
                      <div className="u">u</div>
                      <div className="n">n</div>
                      <div className="d">d</div>
                      <div className="o">o</div>
                      <div className="oo">o</div>
                    </div>
                    </div>
                    <div id="text-fields">
                    <TextField id="textbox11" label="Email" onChange={this.handleEmail} required variant="outlined" />                                                                    <br/><br/>
                    <Button id="forgotbtn" variant="contained" onClick={this.handleSend}>Submit</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Forgot;

