import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import BottomNav from "../layout/BottomNav";
import Navbar from "../layout/Navbar";
import formatDate from '../../util/date';
import axios from 'axios';

class UploadSong extends Component {
  state = {
    contributers: 1,
    date: formatDate(new Date()),
    contributerArray: [],
    id: Math.ceil(Math.random() * 10000),
    status: '',
    contractAddress: ''
  };

  handleClick = () => {
    let currentCount = this.state.contributers + 1;
    this.setState({ contributers: currentCount });
    this.contributerArray.push({address: '',cut: '',accepted: false})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFileClick = (e) => {
      this.setState({file: e.target.files[0]}, () => {
        console.log(this.state.file);
        setTimeout(() => {
          console.log('Sending');
          this.handleUpload();
        }, 2000);
      }); 
  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.file, this.state.file.name)
    console.log(data);
    axios
      .post('/song/upload', data)
      .then(res => {
        console.log(res.statusText)
      })
  }

  handleSubmit = async () => {
    this.setState({artist: this.props.username});
    const contributerAddressArray = this.contributerArray.map((contri) => {
      let address = contri.address;
      return address;
    });
    const contributerCutArray = this.contributerArray.map((contri) => {
      let cut = contri.cut;
      return cut;
    });
    this.setState({status: "uploading to blockchain"});
    await this.props.factoryContract.methods
      .createSong(
        this.state.name,
        this.props.username,
        contributerAddressArray,
        contributerCutArray,
        this.state.id
      )
      .send({
        from: this.props.address
      })
      .then(res => this.setState({status: "uploaded to blockchain successfully"}))
      .catch(err => {
        console.log(err);
        this.setState({status: "upload failed"});
      });
    let songAddress = await this.props.factoryContract.methods.songMapping(this.state.id).call();
    this.setState({contractAddress: songAddress}, () => {
      const {status, id, ...data} = this.state;
      let sendingData = {...data, address: this.props.address};
      console.log(sendingData);
      fetch("/song/temp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(sendingData)
      })
      .then(() => this.props.history.push('/'))
      .catch(err => {
        console.log(err);
      });
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
                label="Price ($)"
                name="price"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange = {this.handleChange}
            />

            <input type="file" onChange={this.handleFileClick} />

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
            {this.state.status}
        </div>
        <BottomNav />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    factoryContract: state.factoryContract,
    username: state.username,
    address: state.address
  }
}

export default connect(mapStateToProps)(UploadSong);
