import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReportItem = props => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
          <Link to={`/report/${props.report_id}`}>
            View Report
          </Link>
          </Card.Text> 
          <Card.Text>
          {props.first_name + " " + props.last_name}
          </Card.Text>
          <Card.Text>
          {props.rep_type}
          </Card.Text>
          <Card.Text>
          {props.rep_count}
          </Card.Text>     
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReportItem;