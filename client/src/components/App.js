import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Login from './auth/Login'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './auth/Registration';
import Dashboard from './Dashboard';
import CreateReport from './CreateReport';
import Report from './Report'
import ReportEdit from './ReportEdit'
import { API_ROOT } from '../apiRoot'


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus() {
    console.log(API_ROOT)
    axios
      .get(`http://${API_ROOT}/logged_in`, { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.isLoggedIn === false
        ) {
          this.setState({
            isLoggedIn: true,
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.isLoggedIn === true)
        ) {
          this.setState({
            isLoggedIn: false,
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data.data.user
    })

  }

  handleLogout() {
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    )
  }

  render() {
    return(
      <div>
        <NavigationBar isLoggedIn={this.state.isLoggedIn} 
                                  handleLogout={this.handleLogout} 
        />
         <Routes>
          <Route path={"/login"} element={<Login handleLogin={this.handleLogin}
                                          handleSuccessfulAuth={this.handleSuccessfulAuth}
                                          />} 
          />
          <Route path={"/register"} element={<Registration 
                                            handleLogin={this.handleLogin}
                                            handleSuccessfulAuth={this.handleSuccessfulAuth}
                                            />} 
          />
          <Route path={"/"} element={<Dashboard isLoggedIn={this.state.isLoggedIn} 
                                                currentUser={this.state.user} />} />
          <Route path={"/create-report"} element={<CreateReport currentUser={this.state.user} />} />
          <Route path={`/report/:id`} element={<Report currentUser={this.state.user} />} />
          <Route path={`/report/:id/edit`} element={<ReportEdit currentUser={this.state.user} />} />
         </Routes>
      </div>
    );
  }
}