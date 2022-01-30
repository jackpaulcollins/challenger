import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReportItem = props => {

  const textDisplay = (repType) =>{
    switch(repType){
      case "push_up":
        return "push ups";
      case "air_squat":
        return "air squats";
      case "bar_dip":
        return "bar dips";
      case "bench_dip":
        return "bench dips";
      case "chin_up":
        return "chin ups";
      case "pull_up":
        return "pull ups";
      case "handstand_push_up":
        return "handstand push ups";
      case "back_extension":
        return "back extensions";
      case "mountain_climber":
        return "mountain climbers";
      case "burpee":
        return "burpees";
      case "squat":
        return "squats";
    }
  }

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
          {props.first_name + " " + props.last_name + " reported reps!"}
          </Card.Text>
          <Card.Text>
          {"Rep Type: " + textDisplay(props.rep_type)}
          </Card.Text>
          <Card.Text>
          {"Reps: " + props.rep_count}
          </Card.Text>     
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReportItem;