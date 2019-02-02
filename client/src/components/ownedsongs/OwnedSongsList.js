import React from "react";
import Grid from "@material-ui/core/Grid";
import SongCard from "../songs/SongCard";
import Typography from "@material-ui/core/Typography";

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
        owned songs
      </Typography>

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
