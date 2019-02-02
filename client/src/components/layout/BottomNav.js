import React, { Component } from "react";
import { connect } from 'react-redux';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

class BottomNav extends Component {
  render() {
    if(this.props.changed){
      this.props.change();
      if(this.props.bottomValue === 0){
        this.props.history.push('/');
      } else if(this.props.bottomValue === 1){ 
        this.props.history.push('/ownedSongs');
      } else if(this.props.bottomValue === 2){
        this.props.history.push('/publishedSongs');
      }
    }
    return (
      <BottomNavigation
        showLabels
        style={{ position: "fixed", bottom: 0, width: "100%" }}
        value={this.props.bottomValue}
        onChange={(e, newValue) => {
          this.props.changeBottom(newValue)
        }}
      >
        <BottomNavigationAction label="HomeIcon" icon={<HomeIcon />} />
        <BottomNavigationAction label="Owned Songs" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Published Songs" icon={<PublishIcon />} />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    bottomValue: state.bottomValue,
    history: state.history,
    changed: state.changed
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    change: () => dispatch({type: "CHANGED"}),
    changeBottom: (value) => dispatch({type: "BOTTOM_VALUE", value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
