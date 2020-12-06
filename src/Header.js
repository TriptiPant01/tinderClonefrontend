import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        className="header_logo"
        alt=""
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}
