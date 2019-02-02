import React from "react";
import OwnedSongsList from "./OwnedSongsList";
import Navbar from "../layout/Navbar";
import BottomNav from "../layout/BottomNav";

const OwnedSongs = () => {
  return (
      <div>
          <Navbar />
          <OwnedSongsList />;
          <BottomNav />
      </div>
  ) 
};

export default OwnedSongs;