import React from "react";
import "../../styles/home.css";
import FeaturedInfo from "../FeaturedInfo";
import ChartData from "../ChartData";
import { userData } from "../dummyData";
import WidgetLg from "../WidgetLg";
import WidgetSm from "../WidgetSm";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <ChartData
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
