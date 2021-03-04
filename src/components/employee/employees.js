import React, { Component } from "react";
import API from "../../utils/API";
import "./employees.css";

class Employees extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.usersInit();
  }

  usersInit = () => {
    API.getUsers()
      .then((res) => {
        console.log("res.data.results: ", res.data.results);
        let results = res.data.results;
        this.setState({ data: results });

        //variable to save data array from localStorage as well
        //as a condition for the new data array to save to localstorage
        const employees = JSON.parse(localStorage.getItem("employees")) || null;

        //if the variable employees === null meaning no data is
        //being saved, then psuh api data array to localstorage
        if (employees === null) {
          localStorage.setItem("employees", JSON.stringify(results));
          console.log("emp ", employees);
        }
      })
      .catch((err) => console.log("getUsers error: " + err));
  };

  newEmps = () => {
    localStorage.clear("employees");
    window.location.reload(false);
  };

  render() {
    return <button onClick={() => this.newEmps()}>Get New Employees</button>;
  }
}

export default Employees;
