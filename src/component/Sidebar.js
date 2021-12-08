import React from "react";
import "./styles/sidebar.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  Timeline,
  TrendingUp,
  PersonOutlineOutlined,
  AttachMoneyOutlined,
  BarChart,
  Storefront,
  MailOutline,
  DynamicFeed,
  MessageOutlined,
  WorkOutlineOutlined,
  Report,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebarItemTitle">Dashboard</h3>
        <ul>
          <li className="active">
            <NavLink to="/" className="link">
              <Home />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <Timeline />
            <span>Analytics</span>
          </li>
          <li>
            <TrendingUp />
            <span>sales</span>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarItemTitle">Quick Menu</h3>
        <ul>
          <li>
            <NavLink to="/users" className="link">
              <PersonOutlineOutlined />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="link">
              <Storefront />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <AttachMoneyOutlined />
            <span>Transition</span>
          </li>
          <li>
            <BarChart />
            <span>Reports</span>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarItemTitle">Notifications</h3>
        <ul>
          <li>
            <MailOutline />
            <span>Mail</span>
          </li>
          <li>
            <DynamicFeed />
            <span>Feedback</span>
          </li>
          <li>
            <MessageOutlined />
            <span>Messages</span>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarItemTitle">Staff</h3>
        <ul>
          <li>
            <WorkOutlineOutlined />
            <span>Manage</span>
          </li>
          <li>
            <Timeline />
            <span>Analytics</span>
          </li>
          <li>
            <Report />
            <span>Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
