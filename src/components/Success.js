import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
  continue = e => {
      e.preventDefault()
      // Process FOrm //
      this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Success" />
              <h1>Thank You for your submission</h1>
              <p>You will get an email with further
                  instructions
              </p>
        </React.Fragment>
     </MuiThemeProvider>
    )
  }
}


const styles = {
  button: {
    margin: 15
  }
}


export default Success

