import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import textDisplay from '../textTranslation'

const ReportItem = props => {

  textDisplay(props.rep_type)
  return (
    <div className="card">
      <Card>
        <Card.Body>
          <Card.Text>
          <Link to={`/report/${props.report_id}`}>
            View
          </Link>
          </Card.Text> 
          <Card.Text>
          {props.first_name + " " + props.last_name[0]+ "." + " reported " +
          props.rep_count + " " +  textDisplay(props.rep_type)}
          </Card.Text>  
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReportItem;