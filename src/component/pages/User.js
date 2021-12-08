import React from "react";
import "../styles/user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  MyLocation,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="eachUser">
      <div className="eachUserTitle">
        <h1>Edit User</h1>
        <Link to="/newUser" className="createUserBtn">
          Create
        </Link>
      </div>
      <div className="eachUserContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <div className="userDetails">
              <p>Kamrul Islam</p>
              <span>Front End Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <h4>Account Details</h4>
            <div className="userShowBottomItem">
              <PermIdentity />
              <span>kmislam</span>
            </div>
            <div className="userShowBottomItem">
              <CalendarToday />
              <span>12.04.2021</span>
            </div>
            <h4>Contact Details</h4>
            <div className="userShowBottomItem">
              <PhoneAndroid />
              <span>+1 123 456 78</span>
            </div>
            <div className="userShowBottomItem">
              <MailOutline />
              <span>kmislam@gamil.com</span>
            </div>
            <div className="userShowBottomItem">
              <MyLocation />
              <span>Dhaka | Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <h4>Edit</h4>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="kmislam" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Kamrul islam" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="kmislam@gamil.com" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Dhaka | Bangladesh" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="/assets/images/profile.jpg" alt="profile" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
