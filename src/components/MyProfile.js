import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <label for="name">Name</label>
        <input name="name" id="name" placeholder="Your name"></input>
        <label for="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description about yourself"
        />
        <input type="checkbox" name="agree" id="agree" />
        <label for="agree">I have read the terms of conduct</label>
        <button>Submmit</button>
      </form>
    );
  }
}

export default MyProfile;
