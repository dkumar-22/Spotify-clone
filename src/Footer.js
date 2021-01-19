import React, { useState } from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

function Footer() {
  const [hover, setHover] = useState(true);
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <div className="footer">
      <div className="footer-left">
        <p>Album Details</p>
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer-icon"
        />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <ImportantDevicesIcon fontSize="small" />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <div
              className="change-volume"
              onMouseEnter={() => {
                setHover(false);
                console.log(hover);
              }}
              onMouseLeave={() => {
                setHover(true);
                console.log(hover);
              }}
            >
              {hover ? (
                <hr className="rule" />
              ) : (
                <Slider
                  defaultValue={20}
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                  style={{
                    postion: "relative",
                    bottom: "13px",
                    color: "green",
                  }}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
