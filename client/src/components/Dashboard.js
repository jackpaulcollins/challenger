import React from 'react';
import { Link } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import ReportFeed from './ReportFeed';

const Dashboard = props => {

  if (props.isLoggedIn) {
    return (
      <div>
        <Link
            to={{
              pathname: "/create-report"
            }}
        >Create Report</Link>
        <ReportFeed />
        <LeaderBoard />
      </div>
    )
  } else {
    return (
      <div>Welcome, please Login on Register</div>
    )
  }
}

export default Dashboard;