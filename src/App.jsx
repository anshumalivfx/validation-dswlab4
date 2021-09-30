import React, { Component } from "react";
import "./App.css";
import countries from "./countries";
// import { ErrorButton } from "./ErrorButton";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gender: null,
      language: null,
    };
  }
  onClick = () => {
    var userid = document.getElementById("userid").value;
    var userpassword = document.getElementById("userpassword").value;
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;
    var zipcode = document.getElementById("zipcode").value;
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userpassword.length < 6 || userpassword.length > 12 || !userid) {
      alert(
        "password is required and must be at least 6 characters and less than 12 characters"
      );
    } else if (!name) {
      alert("name is required");
    } else if (!userid || userid.length < 6 || userid.length > 12) {
      alert(
        "userid is required and must be at least 6 characters and less than 12 characters"
      );
    } else if (!country) {
      alert("please select a country");
    } else if (re.test(email) === false) {
      alert("Enter a valid email address");
    } else if (!zipcode) {
      alert("Please enter a valid zipcode");
    } else if (this.state.gender == null) {
      alert("Please select your gender");
    } else if (this.state.language == null) {
      alert("Please select your language");
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className="container rounded-3 "
            style={{ width: "50%" }}
            align="center"
          >
            <h1>Form</h1>
            <form className="p-3" style={{ width: "auto", minWidth: "20%" }}>
              <div className="input-group d-flex">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    UserId
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  id="userid"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Password
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Name
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Address
                </span>
                <textarea
                  className="form-control"
                  name="Text1"
                  id="address"
                  cols="40"
                  rows="5"
                ></textarea>
              </div>

              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Country
                </span>
                <select
                  className="form-control"
                  name=""
                  id="country"
                  value="India"
                >
                  {countries.map((data, i) => {
                    return (
                      <option value={data.name} key={i}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Zip Code:
                </span>
                <input
                  type="number"
                  id="zipcode"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email:
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group d-flex">
                <span
                  className=""
                  style={{ paddingRight: 50 }}
                  id="inputGroup-sizing-default"
                >
                  Sex:
                </span>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="male"
                  value="male"
                  onChange={() => {
                    this.setState({ gender: "male" });
                  }}
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault1"
                  style={{ paddingRight: 50 }}
                >
                  Male
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="female"
                  value="female"
                  nChange={() => {
                    this.setState({ gender: "female" });
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Female
                </label>
              </div>

              <div className="input-group d-flex">
                <span
                  className=""
                  style={{ paddingRight: 50 }}
                  id="inputGroup-sizing-default"
                >
                  Language:
                </span>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="english"
                  value="english"
                  onChange={() => {
                    this.setState({ language: "English" });
                  }}
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault1"
                  style={{ paddingRight: 50 }}
                >
                  English
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="nonenglish"
                  value="nonenglish"
                  nChange={() => {
                    this.setState({ language: "Non English" });
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Non English
                </label>
              </div>
              <div className="input-group d-flex">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  About
                </span>
                <textarea
                  className="form-control"
                  name="Text1"
                  id="about"
                  cols="40"
                  rows="5"
                ></textarea>
              </div>
            </form>

            <button onClick={this.onClick}>Submit New</button>
          </div>
        </header>
      </div>
    );
  }
}
