import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }
  callAPI() {
     fetch("http://localhost:5000/")
       .then((res) => res.json())
       .then((res) => {
        console.log(res);
        this.setState({users: res })
        console.log(this.state.users);
       });
       
   }

   componentDidMount() {
     this.callAPI();
   }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Admin />} />
            <Route path="users" element={<UserList props={{users: this.state.users, callAPI: this.callAPI}}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
