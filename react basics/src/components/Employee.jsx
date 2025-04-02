import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Varad",
    };
  }

  render() {
    return (
      <div>
        <h1>Employee Details </h1>
        <p>{this.state.firstName}</p>
      </div>
    );
  }
}
export default Employee;
