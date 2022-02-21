import React from 'react';
import LeaderBoard from './LeaderBoard';
import ReportFeed from './ReportFeed';
import '../App.css'

const Dashboard = props => {

  if (props.isLoggedIn) {
    return (
      <div>
        <p className="intro">Welcome, {props.currentUser.first_name}</p>
        <div className="container">
          <div className="report-feed">
            <ReportFeed />
          </div>
          <div className="leaderboard">
            <LeaderBoard />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="logged-out-banner">Welcome, please Login on Register</div>
    )
  }
}

export default Dashboard;