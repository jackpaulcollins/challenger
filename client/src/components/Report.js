import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link, useParams, useLocation } from 'react-router-dom'
import axios from 'axios';

const ReportItem = props => {

  const [report, setReport] = useState([]);
  const [reportUser, setReportUser] = useState({});

  useEffect(() => {
    let mounted = true;
    getReport(id);
    return () => mounted = false;
  }, []);

  let params = useParams()

  const id = params.id

  async function getReport(id) {
    let data = await axios.get(`http://localhost:3001/api/reports/${id}`)
    if (data) {
      setReportUser({
                    first_name: data.data.user.first_name,
                    last_name: data.data.user.last_name
                  })
      setReport(data.data.report)
    }
  }

  const maybeRenderEditLink = () => {
    if (props.currentUser.id === report.user_id) {
      return (
        <div>
          <Link 
                    to= {`/report/${report.id}/edit`}
                    state={{ report: report }}>
            <Button>
              Edit
            </Button>
          </Link>
        </div>
      )
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          {maybeRenderEditLink()}
          <Card.Text>
            {"User: " + reportUser.first_name + " " + reportUser.last_name}
          </Card.Text> 
          <Card.Text>
            {"Rep Type: " + report.rep_type}
          </Card.Text>
          <Card.Text>
            {"Rep Count: " + report.rep_count}
          </Card.Text>       
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReportItem;