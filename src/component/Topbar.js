import React from "react";
import "./styles/topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="logo">
          <span>Dashboard</span>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <NotificationsNone />
            <span>2</span>
          </div>
          <div className="topbarIconItem">
            <Language />
            <span>3</span>
          </div>
          <div className="topbarIconItem">
            <Settings />
          </div>
        </div>
        <div className="profileImg">
          <img src="/assets/images/profile.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
