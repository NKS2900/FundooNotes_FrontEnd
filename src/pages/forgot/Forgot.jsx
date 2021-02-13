import React, { Component } from 'react';
import { TextField, Button,Card ,Snackbar} from '@material-ui/core';
import '../forgot/forgot.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { forgot } from '../../services/UserService.js';
import Alert from '@material-ui/lab/Alert';


class Forgot extends Component{
    constructor(props){
        super(props);
        this.state = { 
          email: '', 
          snackbarOpen: false,
          snackbarMessage: "",
          severity:'',
        };
      }
  
      handleCloseSnackbar = () => {
        this.setState({ snackbarOpen: false });
      };
  
      validation=()=>{
        let Email=this.state.email;
        let invalidForm=true;
  
        if(!Email.match(/^[a-zA-Z0-9.]{1,}@[a-z]{1,5}[.a-z]{1,5}[.]{1}[a-z]{1,4}$/))
        {
          this.setState({ eerror:true});
          this.setState({ emailerror:"Invalid Email."});
          invalidForm=false;
        }
          return invalidForm;
      }
  // ----------------------------------------------

      handleSend=()=>{
         let Email= this.state.email;

      if(this.validation())
      {
        forgot(Email).then((response)=>{
          if(response.status === 200){
           
            //this.props.history.push("/login");
            let responseMassege=response.data.message;
          this.setState({
          snackbarOpen: true,
          severity:'success',
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
          console.log("Forgot Response : ",response);
        }
        
        ).catch((err)=>{
      
          console.log("this is error: ",err)
          this.setState({
            snackbarOpen: true,
            severity:'error',
            snackbarMessage: "User Not Found!!!",
          }
          );
          console.log("this is exception: ",err);})
      }
    }
    
      handleEmail=(event)=>{
        this.setState({ eerror:false});
        this.setState({ emailerror:""});
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
                    <TextField id="textbox11" label="Email" onChange={this.handleEmail} required variant="outlined"
                    helperText={this.state.emailerror}  error={this.state.eerror} />                                                                    <br/><br/>
                    <Button id="forgotbtn" variant="contained" onClick={this.handleSend}>Submit</Button>
                    </div>
                </Card>
                <Snackbar
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={this.state.snackbarOpen}
                          autoHideDuration={4000}
                          onClose={this.handleCloseSnackbar}
                         
                        ><Alert onClose={this.handleCloseSnackbar} severity={this.state.severity}>{this.state.snackbarMessage}</Alert>
                        </Snackbar>
            </div>
        )
    }
}

export default Forgot;

