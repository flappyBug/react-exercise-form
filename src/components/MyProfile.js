import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    description: "",
    gender: "male",
    name: "",
    agree: false,
  };

  onChange = (event) => {
    // event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          placeholder="Your name"
          onChange={this.onChange}
        ></input>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={this.onChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description about yourself"
          onChange={this.onChange}
        />
        <div>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            onChange={this.onChange}
          />
          <label htmlFor="agree">I have read the terms of conduct</label>
        </div>
        <button
          disabled={
            !(this.state.description && this.state.name && this.state.agree)
          }
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default MyProfile;
