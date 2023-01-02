import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${this.state.userName}`);
    const user = { user: this.state.userName };
    console.log("newUser", user);
    this.props.props.postUser(user);
  };
  handleChange(event) {
    this.setState({
      userName: event.target.value,
    });
    console.log(this.state.userName);
  }

  render() {
    return (
      <div className="container">
        <form
          className=""
          action="/"
          onSubmit={(event) => this.handleSubmit(event)}
          method="POST"
        >
          <div className="mb-3 mt-3">
            <label htmlFor="user">
              Enter your name:
              <input
                className="form-control pt-0"
                type="text"
                name="user"
                value={this.state.userName}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            {this.state.redirect && <Navigate to="/users" replace={true} />}
            <input className="btn btn-primary ms-2 " type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;
