import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import BottomNav from "../layout/BottomNav";
import Navbar from "../layout/Navbar";
import formatDate from '../../util/date';

class UploadSong extends Component {
  state = {
    contributers: 1,
    date: formatDate(new Date()),
    contributerArray: []
  };

  handleClick = () => {
    let currentCount = this.state.contributers + 1;
    this.setState({ contributers: currentCount });
    this.contributerArray.push({address: '',cut: '',accepted: false})
    console.log(currentCount);
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const {...data} = this.state;
    console.log(data);
    fetch("/song/temp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    });
  }

  contributerArray = [
    {
      address: '',
      cut: '',
      accepted: false
    }
  ];

  handleContributerChange = (e, i, typeString) => {
    if(typeString === 'address'){
      this.contributerArray[i].address = e.target.value;
    } else {
      this.contributerArray[i].cut = e.target.value;
    }
    this.setState({contributerArray: this.contributerArray});
  }

  render() {
    let contributers = [];
    for (let i = 0; i < this.state.contributers; i++) {
      let label = "Contributer Address #" + (i + 1);
      let cutLabel = "Cut #" + (i+1);
      contributers.push(
        <div>
        <TextField
          label={label}
          margin="normal"
          variant="outlined"
          style={{width:"51%"}}
          onChange = {(e) => {
            this.handleContributerChange(e ,i, 'address');
          }}
        />
        <TextField
          label={cutLabel}
          margin="normal"
          variant="outlined"
          style={{marginLeft:20}}
          onChange = {(e) => {
            this.handleContributerChange(e ,i, 'cut');
          }}
        />
        </div>
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
                name="name"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange = {this.handleChange}
            />

            <TextField
                label="Genre"
                name="genre"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange = {this.handleChange}
            />

            <TextField
                label="Price"
                name="price"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange = {this.handleChange}
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
                onClick = {this.handleSubmit}
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
