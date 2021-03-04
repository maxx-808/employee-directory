import React from "react";

const Main = () => {
  //pulling employee data array from localstorage
  const emps = JSON.parse(localStorage.getItem("employees"));

  //only starting the functions of the page if data is in local storage
  //.map and such will throw errors for null data
  if (emps !== null) {
    //returning table of employees exactly in order of how it was in the array
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Experience</th>
            </tr>
            {emps.map(
              ({ name, email, cell, gender, dob, registered }, index) => (
                <tr className="emp" key={index}>
                  <th scope="row" className="fName">
                    {name.first}
                  </th>
                  <td className="lName">{name.last}</td>
                  <td className="email">{email}</td>
                  <td className="phone">{cell}</td>
                  <td className="gender">{gender}</td>
                  <td className="age">{dob.age}</td>
                  <td className="years">{registered.age}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );

    //if data from local storage is null, no table shall be made
  } else {
    return (
      <div>
        <h1>NO EMPLOYEES SAVED! NO TABLE RENDERED</h1>
      </div>
    );
  }
};

export default Main;
