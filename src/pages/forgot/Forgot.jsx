import React, { Component } from 'react';
import { TextField, Button,Card } from '@material-ui/core';
import '../forgot/forgot.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class Forgot extends Component{
  constructor(props){
    super(props)
  }

//     handleChange=()=>{
//       this.props.history.push("/signup");
//   };
    render(){
        return(
            <div className="maindiv">
                <Card className="forgotcard">
                    <div id="headarrow">
                <ArrowBackIcon id='backarrow' onClick={()=>this.props.history.push("/login")}/>
                <div className="fundooHeader">
                      <div className="f">F</div>
                      <div className="u">u</div>
                      <div className="n">n</div>
                      <div className="d">d</div>
                      <div className="o">o</div>
                      <div className="oo">o</div>
                    </div>
                    </div>
                    <div id="text-fields">
                    <TextField id="textbox11" label="Email" required variant="outlined" />                                                                    <br/><br/>
                    <Button id="forgotbtn" variant="contained">Submit</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Forgot;

