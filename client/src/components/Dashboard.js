import React from 'react';
import LeaderBoard from './LeaderBoard';
import ReportFeed from './ReportFeed';
import '../App.css'

const Dashboard = props => {

  if (props.isLoggedIn) {
    return (
      <div>
        <div className="container">
          <ReportFeed />
          <LeaderBoard />
        </div>
      </div>
    )
  } else {
    return (
      <div>Welcome, please Login on Register</div>
    )
  }
}

export default Dashboard;