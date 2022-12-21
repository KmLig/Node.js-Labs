import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${this.state.userName}`);
    const user = { user: this.state.userName };
    console.log("newUser", user);
    fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => { 
      console.log(response)
      this.props.props.callAPI();}
      )
      .catch((error) => {
        console.log("Post user", error.message);
        alert("New user could not be posted\nError: " + error.message);
      });

    this.setState({
      userName: "",
    });
    ;
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
            <input className="btn btn-primary ms-2 " type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;
