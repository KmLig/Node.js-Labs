import { render } from "@testing-library/react";
import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.props.callAPI();
  }

  render() {
    const { users } = this.props.props;
    const userMapping = users?.map((user) => {
      return <li>{user}</li>;
    });
    console.log(users);
    if (users !== undefined) {
      return (
        <div>
          <h1>Users</h1>
          {userMapping}
        </div>
      );
    } else {
        return <h1>No Users</h1>;
      }
  }
}

export default UserList;
