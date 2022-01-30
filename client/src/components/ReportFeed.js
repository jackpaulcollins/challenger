import React, { useEffect, useState } from 'react';
import ReportItem from './ReportItem'
import axios from 'axios';
import { API_ROOT } from '../../src/apiRoot'
import '../App.css'

const ReportFeed = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);


  async function getReports() {
    let data = await axios.get(`${API_ROOT}/api/reports`)
    if (data) {
      setReports(data.data.reports)
    }
  }

  return (
    <div className="report-field">
      {reports.map(report =>  <div key={report.id} className="report-item">
                                <ReportItem
                                  first_name={report.user.first_name}
                                  last_name={report.user.last_name}
                                  report_id={report.id}
                                  rep_type={report.rep_type}
                                  rep_count={report.rep_count}
                                  user_id={report.user_id} 
                                />
                              </div> )}
                              
    </div>
  )
}

export default ReportFeed;