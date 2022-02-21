import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rank from './Rank'
import { API_ROOT } from '../../src/apiRoot'
import Button from 'react-bootstrap/Button';

const LeaderBoard = () => {

  const [totalBoard, setTotalBoard] = useState([]);
  const [weeklyBoard, setWeeklyBoard] = useState([]);
  const [dailyBoard, setDailyBoard] = useState([]);
  const [toggle, setToggle] = useState("at");

  useEffect(() => {
    async function getBoard() {
      let data = await axios.get(`${API_ROOT}/api/user_points`)
      if (data) {
        console.log(data.data.data)
        setTotalBoard(data.data.data)
      }
    }

    async function getDailyBoard() {
      let data = await axios.get(`${API_ROOT}/api/current_day_user_points`)
      if (data) {
        setDailyBoard(data.data.data)
      }
    }

    async function getWeeklyBoard() {
      let data = await axios.get(`${API_ROOT}/api/current_week_user_points`)
      if (data) {
        setWeeklyBoard(data.data.data)
      }
    }

    getBoard();
    getWeeklyBoard();
    getDailyBoard();
  }, [setTotalBoard, setWeeklyBoard, setDailyBoard, toggle]);

  const selectedLeaderBoard = () => {
    if (toggle == "at") {
      return totalBoard.map(position => <Rank key={position} rank={totalBoard.indexOf(position)} position={position}/>)
    } if (toggle == "w") {
      return weeklyBoard.map(position => <Rank key={position} rank={weeklyBoard.indexOf(position)} position={position}/>)
    } else if (toggle == "d") {
      return dailyBoard.map(position => <Rank key={position} rank={dailyBoard.indexOf(position)} position={position}/>)
    }
  }

  return (
    <div>
      <div>
        <h5>Leaderboard!</h5>
        <Button className="lead-button" onClick={() => setToggle("d")}>Daily</Button>
        <Button className="lead-button" onClick={() => setToggle("at")}>All-time</Button>
        <Button className="lead-button" onClick={() => setToggle("w")}>Weekly</Button>
      </div>
      <div>{selectedLeaderBoard()}</div>
    </div>
  )
}

export default LeaderBoard;