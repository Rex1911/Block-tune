import React from "react";
import Grid from "@material-ui/core/Grid";
import SongCard from "./SongCard";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SongList = () => {
  return (
    <div
      style={{
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10
      }}
    >
      <Typography
        align="center"
        style={{
          fontFamily: "Major Mono Display",
          fontSize: "4vw",
          marginBottom: 10
        }}
      >
        songs
      </Typography>

      <div style={{ textAlign: "center" }}>
        <TextField
          label="Search"
          value="Search here"
          margin="normal"
          variant="outlined"
          style={{ margin: "auto", marginBottom: 10 }}
        />
        <br />

        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 20 }}
        >
          Search
        </Button>
      </div>

      <Grid container spacing={24}>
        <Grid item xs>
          <SongCard />
        </Grid>
        <Grid item xs>
          <SongCard />
        </Grid>
        <Grid item xs>
          <SongCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default SongList;
