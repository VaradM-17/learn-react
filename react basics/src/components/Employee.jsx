import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Varad",
      lastName: "Mule",
      email:"varad@gmail.com"
    };
  }

  render() {
    return (
      <div>
        <h1>Employee Details </h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
      </div>
    );
  }
}
export default Employee;
