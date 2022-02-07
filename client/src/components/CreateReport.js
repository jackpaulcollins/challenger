import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { API_ROOT } from '../../src/apiRoot'


const CreateReport = props => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isLoggedIn){
      navigate("/")
    }
  }, [props.isLoggedIn, navigate]);


  const [ rep_type, setRepType ] = useState('');
  const [ rep_count, setRepCount ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!rep_type) {
      //super hacky, but I don't think you can add required to a dropdown https://github.com/JedWatson/react-select/issues/3140
      alert("Please provide a rep_type")
      return
    }
    const date = new Date();
    let data = await axios.post(`${API_ROOT}/api/reports`, {
      report: {
        user_id: props.currentUser.id,
        rep_type: rep_type,
        rep_count: rep_count,
        created_at: date
      }
    })

    if (data){
      alert(`             Report Created! Great work.\n
             Rep Type: ${data.data.report.rep_type}\n 
             Rep Count: ${data.data.report.rep_count}`
            )
      navigate("/");
    }
  }

  return (
    <div>
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="formBasicSelect">
        <Form.Control 
          as="select" 
          onChange={e => setRepType(e.target.value)}
        >
          <option>Select Your Rep Type</option>
          <option value="push_up">Push Ups</option>
          <option value="air_squat">Air Squats</option>
          <option value="bar_dip">Bar Dips</option>
          <option value="bench_dip">Bench Dips</option>
          <option value="chin_up">Chin Ups</option>
          <option value="pull_up">Pull Ups</option>
          <option value="handstand_push_up">Handstand Push Ups</option>
          <option value="back_extension">Back Extensions</option>
          <option value="mountain_climber">Mountain Climbers</option>
          <option value="burpee">Burpees</option>
          <option value="squat">Squats</option>
          <option value="leg_raise">Leg Raise</option>
          <option value="body_weight_row">Body Weight Row</option>
          <option value="mile">Mile</option>
          <option value="plank">Plank (1 min increments)</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-1" controlId="rep_count">
        <Form.Control 
          required
          type="number" 
          placeholder="Rep Count" 
          name="rep_count"
          value={rep_count} 
          onChange={e => setRepCount(e.target.value)} 
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    <div>
      <p>In order to rank participants, each rep is worth a certain amount of points</p>
      <p>The value mappings are as follows</p>
      <h5>Key:</h5>
      <ul>
        <li>pushup: 2 points</li>
        <li>airsquat: 2 points</li>
        <li>bar dip: 2 points</li>
        <li>bench dip: 1 point</li>
        <li>chin up: 3 points</li>
        <li>pull up: 4 points</li>
        <li>handstand pushup: 6 points</li>
        <li>back extension: 2 points</li>
        <li>mountain climber: 1 point</li>
        <li>burpee: 3 points</li>
        <li>squat: 2 points</li>
        <li>leg raise: 2 points</li>
        <li>body weight row: 3 points</li>
        <li>one mile (walked or ran): 5 points</li>
      </ul>
    </div>
  </div>
  )
}

export default CreateReport;