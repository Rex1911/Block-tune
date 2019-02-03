import React from "react";
import Typography from "@material-ui/core/Typography";

const Banner = () => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Typography
          align="center"
          variant="h2"
          style={{
            fontFamily: "Major Mono Display",
            fontSize: "10vw",
            marginBottom: 15,
            paddingTop: "30vh"
          }}
        >
          blocktunes
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          style={{ fontFamily: "Major Mono Display" }}
        >
          connecting artists and fans directly via ethereum
        </Typography>
      </div>
      <Typography
        align="center"
        style={{ fontFamily: "Major Mono Display", fontSize: "4vw" }}
      >
        about us
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        style={{
          fontFamily: "Major Mono Display",
          marginLeft: 50,
          marginRight: 50
        }}
      >
        lorem ipsum dolor sit amet, consectetur adipiscing elit. etiam egestas,
        sem vel sodales mollis, neque augue ultrices massa, sit amet rutrum
        lectus nibh ut nulla. duis ullamcorper, quam sit amet ullamcorper
      </Typography>
    </div>
  );
};

export default Banner;
