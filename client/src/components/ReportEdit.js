import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API_ROOT } from '../../src/apiRoot'

const ReportEdit = () => {
  const [ rep_type, setRepType ] = useState("");
  const [ rep_count, setRepCount ] = useState("");
  let params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state.report) {
      setRepType(location.state.report.rep_type);
      setRepCount(location.state.report.rep_count);
    }
  }, [location.state.report]);

  const id = params.id

  async function handleSubmit(e) {
    e.preventDefault()
    let data = await axios.put(`${API_ROOT}/api/reports/${id}`, {
      rep_type: rep_type,
      rep_count: rep_count
    })
    if (data) {
      alert(`      Report Updated!\n
      Rep Type: ${data.data.report.rep_type}\n 
      Rep Count: ${data.data.report.rep_count}`
     )
      navigate("/");
    }
  }

  async function deleteReport(e) {
    e.preventDefault()
    if (window.confirm("Are you certain you want to delete your report?")) {
      let data = await axios.delete(`${API_ROOT}/api/reports/${id}`)
      if (data) {
        alert('report deleted!')
        navigate("/");
      }
    }
  }

  if (location.state){
    return (
      <div className="container">
        <Form className="form-field" onSubmit={e => handleSubmit(e)}>
        <Form.Group controlId="formBasicSelect">
          <Form.Control 
            as="select" 
            onChange={e => setRepType(e.target.value)}
            placeholder={location.state.report.rep_type}
            name="rep_type"
            value={rep_type}
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
            <option value="mile">Miles</option>
            <option value="plank">Plank (1 min increments)</option>
          </Form.Control>
        </Form.Group>
          <Form.Group className="mb-1" controlId="rep_count">
            <Form.Control 
              type="number" 
              placeholder={location.state.report.rep_count} 
              name="rep_count"
              value={rep_count} 
              onChange={e => setRepCount(e.target.value)} 
            />
          </Form.Group>
        <div>
        <Button size="sm" className="button" variant="primary" type="submit">Update</Button>
        <Button size="sm" className="button" variant="primary" onClick={deleteReport}>Delete</Button>
        </div>
      </Form>
    </div>
    )
  } else {
    return (
      navigate('/')
    )
  }
}

export default ReportEdit;