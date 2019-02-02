import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import BottomNav from "../layout/BottomNav";
import Navbar from "../layout/Navbar";

class UploadSong extends Component {
  state = {
    contributers: 1
  };

  handleClick = () => {
    let currentCount = this.state.contributers + 1;
    this.setState({ contributers: currentCount });
    console.log(currentCount);
  };

  render() {
    let contributers = [];
    for (let i = 0; i < this.state.contributers; i++) {
      let label = "Contributer Address #" + (i + 1);
      contributers.push(
        <TextField
          label={label}
          value=""
          margin="normal"
          variant="outlined"
          fullWidth
        />
      );
    }
    return (
      <Fragment>
        <Navbar />
        <div style={{ margin: "auto", maxWidth: 510 }}>
            <form>
            <h1 style={{ textAlign: "center" }}>publish a song</h1>

            <TextField
                label="Song Name"
                value=""
                margin="normal"
                variant="outlined"
                fullWidth
            />

            <TextField
                label="Genre"
                value=""
                margin="normal"
                variant="outlined"
                fullWidth
            />

            <TextField
                label="Price"
                value=""
                margin="normal"
                variant="outlined"
                fullWidth
            />

            {contributers}
            <Fab
                color="secondary"
                aria-label="Edit"
                style={{ width: 37, height: 10, marginLeft: "48%" }}
            >
                <AddIcon onClick={this.handleClick} />
            </Fab>
            <br />
            <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 20, marginLeft: "38%",marginBottom:70 }}
            >
                upload song
            </Button>
            </form>

        </div>
        <BottomNav />
      </Fragment>
    );
  }
}

export default UploadSong;
