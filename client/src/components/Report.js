import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_ROOT } from '../../src/apiRoot'
import { useNavigate } from "react-router-dom";
import textDisplay from '../textTranslation';
import '../App.css';

const ReportItem = props => {
  const [report, setReport] = useState([]);
  const [reportUser, setReportUser] = useState({});
  let params = useParams();
  const navigate = useNavigate();
  const id = params.id

  useEffect(() => {
    if (!props.isLoggedIn){
      navigate("/")
    } else {
      getReport(id);
    }
  }, [props.isLoggedIn, id]);

  async function getReport(id) {
    let data = await axios.get(`${API_ROOT}/api/reports/${id}`)
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
            <Button className="edit-button" size="sm">
              edit
            </Button>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className="card-container">
      <Card className="card-view">
        <Card.Body>
          <div>
            {maybeRenderEditLink()}
          </div>
          <Card.Text>
            {"User: " + reportUser.first_name + " " + reportUser.last_name}
          </Card.Text> 
          <Card.Text>
            {"Rep Type: " + textDisplay(report.rep_type)}
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