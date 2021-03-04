import React from "react";

const Over10 = () => {
  //pulling employee data array from localstorage
  const emps = JSON.parse(localStorage.getItem("employees"));

  //only starting the functions of the page if data is in local storage
  //.map and such will throw errors for null data
  if (emps !== null) {
    //filtering out any employees with 9 or less years exp
    const over10Emps = emps.filter((emp) => emp.registered.age > 9);

    //sorting by years of experience
    const over10EmpsSort = over10Emps.sort((a, b) => {
      return a.registered.age > b.registered.age ? 1 : -1;
    });

    // returning table of employees based off of exp years
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th scope="col">Experience</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
            </tr>
            {over10EmpsSort.map(
              ({ name, email, cell, gender, dob, registered }, index) => (
                <tr className="emp" key={index}>
                  <th scope="row" className="years">
                    {registered.age}
                  </th>
                  <td className="fName">{name.first}</td>
                  <td className="lName">{name.last}</td>
                  <td className="email">{email}</td>
                  <td className="phone">{cell}</td>
                  <td className="gender">{gender}</td>
                  <td className="age">{dob.age}</td>
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

export default Over10;
