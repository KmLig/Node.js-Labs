import React, { useState, useEffect } from "react";

const UserList = (props) => {

  const [users, setValue] = useState(props.props.users);
  useEffect(() => { setValue(props.props.users) }, [props.props.users]);
  console.log(users);
  const userMapping = users.map((user) => {
    return <li>{user}</li>;
  });
  console.log(users);
  if (users !== undefined) {
    return (
      <div className="container">
        <h1>Users</h1>
        {userMapping}
      </div>
    );
  } else {
    return <h1>No Users</h1>;
  }
};

export default UserList;
