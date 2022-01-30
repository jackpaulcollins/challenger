import React, { useEffect, useState } from 'react';
import ReportItem from './ReportItem'
import axios from 'axios';
import { API_ROOT } from '../../src/apiRoot'

const ReportFeed = props => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    let mounted = true;
    getReports();
    return () => mounted = false;
  }, []);


  async function getReports() {
    let data = await axios.get(`${API_ROOT}/api/reports`)
    if (data) {
      setReports(data.data.reports)
    }
  }

  return (
    <div>
      {reports.map(report => <ReportItem 
                                  key={report.id}
                                  first_name={report.user.first_name}
                                  last_name={report.user.last_name}
                                  report_id={report.id}
                                  rep_type={report.rep_type}
                                  rep_count={report.rep_count}
                                  user_id={report.user_id} 
                                />)}
    </div>
  )
}

export default ReportFeed;