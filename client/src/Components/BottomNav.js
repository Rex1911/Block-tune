import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

function BottomNav() {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
        }
      }}
      showLabels
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <BottomNavigationAction label="HomeIcon" icon={<HomeIcon />} />
      <BottomNavigationAction label="Owned Songs" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Published Songs" icon={<PublishIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
