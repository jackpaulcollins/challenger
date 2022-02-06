import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rank from './Rank'
import { API_ROOT } from '../../src/apiRoot'
import Button from 'react-bootstrap/Button';

const LeaderBoard = () => {

  const [totalBoard, setTotalBoard] = useState([]);
  const [weeklyBoard, setWeeklyBoard] = useState([]);
  const [toggle, setToggle] = useState("at");

  useEffect(() => {
    async function getBoard() {
      let data = await axios.get(`${API_ROOT}/api/user_points`)
      if (data) {
        setTotalBoard(cleanUpResponse(data.data.data))
      }
    }

    async function getWeeklyBoard() {
      let data = await axios.get(`${API_ROOT}/api/current_week_user_points`)
      if (data) {
        setWeeklyBoard(cleanUpResponse(data.data.data))
      }
    }

    getBoard();
    getWeeklyBoard();
  }, [setTotalBoard, setWeeklyBoard]);

  function cleanUpResponse(data) {
    return Object.entries(data).sort((a,b) => b[1]-a[1])
  }

  const selectedLeaderBoard = () => {
    if (toggle == "at") {
      return totalBoard.map(position => <Rank key={position} rank={totalBoard.indexOf(position)} position={position}/>)
    } else {
      return weeklyBoard.map(position => <Rank key={position} rank={weeklyBoard.indexOf(position)} position={position}/>)
    }
  }

  console.log(weeklyBoard)

  return (
    <div>
      <h4>Leader Board!</h4>
      <Button className="button" onClick={() => setToggle("at")}>All-time</Button>
      <Button className="button" onClick={() => setToggle("w")}>weekly</Button>
      {selectedLeaderBoard()}
    </div>
  )
}

export default LeaderBoard;