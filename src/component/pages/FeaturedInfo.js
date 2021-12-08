import React from "react";
import ".././styles/featurdinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <h4>Revanue</h4>
        <div className="money">
          <p>$2,415</p>
          <span>-11.4</span>
          <ArrowDownward className="down" />
        </div>
        <p>Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h4>Revanue</h4>
        <div className="money">
          <p>$2,415</p>
          <span>-5.7</span>
          <ArrowDownward className="down" />
        </div>
        <p>Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h4>Revanue</h4>
        <div className="money">
          <p>$2,415</p>
          <span>+2.4</span>
          <ArrowUpward className="up" />
        </div>
        <p>Compared to last month</p>
      </div>
    </div>
  );
};

export default FeaturedInfo;
