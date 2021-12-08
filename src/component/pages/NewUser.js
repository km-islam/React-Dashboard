import React from "react";
import "../styles/newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1>New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="password" placeholder="Dhaka | Bangladesh" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" value="male" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" value="other" id="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select id="active" name="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserButton">
          <button className="newUserBtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
