import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
import UserList from "./components/UserList";
import { connect } from "react-redux";
import { postUser, fetchUser } from "./redux/ActionCreators";

const mapState = (state) => {
  console.log(state);
  return {
    users: state.users,
  };
};


const mapDispatch = (dispatch) => ({
  postUser: (newUser) => dispatch(postUser(newUser)),
  fetchUser: () => dispatch(fetchUser()),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Admin props={{ postUser: this.props.postUser }} />}
            />
            <Route
              path="users"
              element={
                <UserList
                  key={this.props.users}
                  props={{ users: this.props.users.users/*, callAPI: this.callAPI*/ }}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default connect(mapState, mapDispatch)(App);
