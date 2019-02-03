import React from "react";
import PublishedSongsList from "./PublishedSongList";
import Navbar from "../layout/Navbar";
import BottomNav from "../layout/BottomNav";

const OwnedSongs = () => {
  return (
      <div>
          <Navbar />
          <PublishedSongsList />;
          <BottomNav />
      </div>
  ) 
};

export default OwnedSongs;