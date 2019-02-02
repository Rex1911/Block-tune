import React, { Component, Fragment } from "react";
import Navbar from '../../Components/Navbar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Signup extends Component {
  render() {
    return(
      <Fragment>
        <Navbar />
        <div style={{ textAlign: "center", width: 310, margin: "auto" }}>
        <h4 style={{ marginTop: "10vh" }}>enter your name</h4>
        <TextField
          fullWidth
          id="standard-name"
          label="Name"
          value="Aryan"
          style={{ maxWidth: 500 }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20, backgroundColor: "#595959" }}
        >
          SignUp
        </Button>
      </div>
      </Fragment>
    )
  }
}

export default Signup;