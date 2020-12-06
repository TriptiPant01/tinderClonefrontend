import React from "react";
import "./swipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

export default function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipeButton__repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButton__close" />
      </IconButton>
      <IconButton>
        <StarIcon fontSize="large" className="swipeButton__start" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButton__right" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontSize="large" className="swipeButton__flash" />
      </IconButton>
    </div>
  );
}
