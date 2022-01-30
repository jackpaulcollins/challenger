import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const ReportEdit = props => {
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
  }, []);

  const id = params.id

  async function handleSubmit(e) {
    e.preventDefault()
    let data = await axios.put(`http://localhost:3001/api/reports/${id}`, {
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
    let data = await axios.delete(`http://localhost:3001/api/reports/${id}`)
    if (data) {
      alert('report deleted!')
      navigate("/");
    }
  }

  if (location.state){
    return (
      <div>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-1" controlId="rep_type">
          <Form.Control 
            type="text" 
            placeholder={location.state.report.rep_type}
            name="rep_type"
            value={rep_type}
            onChange={e => setRepType(e.target.value)} 
          />
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
      <Button variant="primary" type="submit">Update</Button>
    </Form>
    <Button variant="primary" onClick={deleteReport}>Delete</Button>
    </div>
    )
  } else {
    return (
      navigate('/')
    )
  }
}

export default ReportEdit;